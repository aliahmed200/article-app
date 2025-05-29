"use client";
import React, { useState } from "react";
import Link from "next/link";
import module from "./Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import theblog from "../../../../public/Container.svg";

import Image from "next/image";

interface NavbarProps {
  isAdmin: boolean;
}
const Navbar = ({ isAdmin }: NavbarProps) => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={module.nav}>
      <div>
        <Link className={module.logo} href="/">
          <Image
            className="w-40 dark:brightness-0 dark:invert "
            src={theblog}
            alt="logo"
          />
        </Link>
        <div className={module.menu}>
          {toggle ? (
            <IoMdClose
              onClick={() => {
                setToggle((prev) => !prev);
              }}
            />
          ) : (
            <AiOutlineMenu
              onClick={() => {
                setToggle((prev) => !prev);
              }}
            />
          )}
        </div>
      </div>
      <div
        style={{
          clipPath: (toggle && "polygon(0 0,100% 0, 100% 100%,0 100%)") || "",
        }}
        className={module.linksWrapper}
      >
        <ul className={module.links}>
          <Link
            onClick={() => setToggle(false)}
            className={module.link}
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setToggle(false)}
            className={module.link}
            href="/articles?pageNumber=1"
          >
            Articles
          </Link>
          {isAdmin && (
            <Link
              onClick={() => setToggle(false)}
              className={module.link}
              href="/admin"
            >
              Admin
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
