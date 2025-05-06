import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

/**
 * @method Get
 * @route  ~/api/users/logout
 * @desc   logout user
 * @access public
 */

export function GET(request: NextRequest) {
  try {
    cookies().delete("jwtToken");
    return NextResponse.json({ message: "logout" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
