import Link from "next/link";
import React from "react";
// import module from "./Header.module.css";
import Navbar from "./Navbar";
import { cookies } from "next/headers";
import { verifyTokenForPage } from "@/app/utils/verifyToken";
import UserButton from "./user-button";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const Header = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("jwtToken")?.value || "";
  const payload = verifyTokenForPage(token);
  return (
    <header
      className={` w-full max-w-[64rem] mx-auto flex justify-between items-center py-4`}
    >
      <Navbar isAdmin={payload?.isAdmin || false} />

      <div className="flex-shrink-0">
        {payload ? (
          <UserButton user={payload} />
        ) : (
          <Button>
            <Link className="flex gap-2" href="/login">
              <LogIn size={16} />
              <span>Login</span>
            </Link>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
