import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="bg-sky-700 text-white p-3 flex justify-between items-center">
        <div className="text-3xl w-max font-bold mb-5">
          <p>My Portfolio</p>
        </div>

        <ul className="flex text-lg space-x-5">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
