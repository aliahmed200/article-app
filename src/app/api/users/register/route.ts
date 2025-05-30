import { registerDto } from "@/app/utils/dtos";
import { registerSchema } from "@/app/utils/validationSchhema";
import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/utils/db";
import bcrypt from "bcryptjs";
import { JWTPayload } from "@/app/utils/types";
import { setCookie } from "@/app/utils/generateToken";

/**
 * @method Post
 * @route  ~/api/users/register
 * @desc   Create new user
 * @access public
 */

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as registerDto;
    const validation = registerSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error.issues[0].message, {
        status: 400,
      });
    }
    const user = await prisma.user.findUnique({ where: { email: body.email } });
    if (user) {
      return NextResponse.json(
        { message: "this user already registered" },
        {
          status: 400,
        }
      );
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    const newUser = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: hashedPassword,
      },
      select: {
        username: true,
        id: true,
        isAdmin: true,
      },
    });

    const jwtPayload: JWTPayload = {
      id: newUser.id,
      isAdmin: newUser.isAdmin,
      username: newUser.username,
    };

    const cookie = setCookie(jwtPayload);

    return NextResponse.json(
      { ...newUser },
      { status: 201, headers: { "Set-Cookie": cookie } }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
