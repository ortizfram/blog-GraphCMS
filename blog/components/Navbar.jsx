import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen grid grid-cols-2 p-2 bg-white">
      <div>
        <Link href="/">Logo</Link>
      </div>
      <div className="ml-auto">
        <ul className="grid grid-cols-3 text-center">
          <li>
            <Link href="/">Home </Link>
          </li>
          <li>
            <Link href="/projects">Work</Link>
          </li>
          <li>
            <Link href="/blog">Blog </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
