import Link from "next/link";
import React from "react";
import module from "./Header.module.css";
import Navbar from "./Navbar";
import { cookies } from "next/headers";
import { verifyTokenForPage } from "@/app/utils/verifyToken";
import LogOutButton from "./LogOutButton";

const Header = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("jwtToken")?.value || "";
  const payload = verifyTokenForPage(token);
  //${module.header}
  return (
    <header
      className={`flex w-[40rem] md:w-[64rem] m-auto justify-between items-center py-4`}
    >
      <Navbar isAdmin={payload?.isAdmin || false} />
      <div>
        {payload ? (
          <div className="md:space-x-4">
            <strong>{payload.username}</strong>
            <LogOutButton />
          </div>
        ) : (
          <div className="md:space-x-4">
            <Link className={module.authlink} href="/login">
              Login
            </Link>
            <Link className={module.authlink} href="/register">
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
