import prisma from "@/app/utils/db";
import { LoginDto } from "@/app/utils/dtos";
import { setCookie } from "@/app/utils/generateToken";
import { JWTPayload } from "@/app/utils/types";
import { loginSchema } from "@/app/utils/validationSchhema";
import bcrypt from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";

/**
 * @method Post
 * @route  ~/api/users/login
 * @desc   login user
 * @access public
 */

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LoginDto;
    const validation = loginSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error.issues[0].message, {
        status: 400,
      });
    }

    const user = await prisma.user.findUnique({ where: { email: body.email } });
    if (!user) {
      return NextResponse.json(
        { message: "please make an account first" },
        {
          status: 404,
        }
      );
    }
    const isPsswordMatch = await bcrypt.compare(body.password, user.password);
    if (!isPsswordMatch) {
      return NextResponse.json(
        { message: "invalid email or password" },
        { status: 400 }
      );
    }
    const jwtPayload: JWTPayload = {
      id: user.id,
      isAdmin: user.isAdmin,
      username: user.username,
      email: user.email,
      image: user.image,
    };

    const cookie = setCookie(jwtPayload);

    return NextResponse.json(
      { message: "authenticated" },
      { status: 200, headers: { "Set-Cookie": cookie } }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "internal server error", err },
      { status: 500 }
    );
  }
}
