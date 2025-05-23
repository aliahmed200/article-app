"use client";
import React, { useState } from "react";
import Link from "next/link";
import module from "./Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={module.nav}>
      <div>
        <Link className={module.logo} href="/">
          Cloud Hosting
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
          <Link
            onClick={() => setToggle(false)}
            className={module.link}
            href="/about"
          >
            About
          </Link>
          <Link
            onClick={() => setToggle(false)}
            className={module.link}
            href="/admin"
          >
            Admin
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
