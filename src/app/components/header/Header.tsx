import Link from "next/link";
import React from "react";
import module from "./Header.module.css";
import Navbar from "./Navbar";
import { cookies } from "next/headers";
import { verifyTokenForPage } from "@/app/utils/verifyToken";

const Header = () => {
  const token = cookies().get("jwtToken")?.value || "";
  const payload = verifyTokenForPage(token);
  return (
    <header className={module.header}>
      <Navbar />

      {payload ? (
        <>
          <strong>{payload.username}</strong>
          <Link className={module.authlink} href="/login">
            Login
          </Link>
        </>
      ) : (
        <>
          <Link className={module.authlink} href="/login">
            Login
          </Link>
          <Link className={module.authlink} href="/register">
            Register
          </Link>
        </>
      )}
    </header>
  );
};

export default Header;
