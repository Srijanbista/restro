"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Container from "./Container";

export type NavItem = {
  title: string;
  link: string;
  icon?: ReactNode;
};
const Navbar = () => {
  const pathname = usePathname();
  console.log("pathname", pathname);

  const navItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Menu",
      link: "/menu",
    },
    {
      title: "Pages",
      link: "/pages",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];
  return (
    <nav className="lg:py-4 fixed bg-white/60 z-[1002] w-full top-8 left-0 right-0 backdrop-blur-sm">
      <Container className="flex justify-between items-center">
        <Link href="/" className="flex gap-x-3 lg:gap-x-6 items-center">
          <Image
            src={"/assets/icon-restaurant.png"}
            height={75}
            width={75}
            alt="Logo of Bistro Bliss"
            className="cursor-pointer"
          />
          <span className="text-2xl font-light cursor-pointer">
            Bistro Bliss
          </span>
        </Link>
        <ul className="flex flex-col lg:flex-row gap-y-20 gap-x-5 xl:gap-x-20 lg:justify-center text-xl items-center">
          {navItems.map((item) => (
            <li
              className={`${
                pathname === item.link && "font-bold"
              } transition-all duration-300 ease-in-out cursor-pointer hover:text-slate-700`}
              key={item.title}
            >
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
          <button className="text-2xl font-medium px-4 py-2 hover:text-white hover:bg-slate-800 rounded-xl text-slate-800 transition-colors duration-300 ease-in-out">
            Book A Table
          </button>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
