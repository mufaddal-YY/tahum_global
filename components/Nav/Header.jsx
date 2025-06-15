"use client";
import Link from "next/link";
import Logo from "@/public/logo.png";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import { MdArrowForward } from "react-icons/md";

import { Button } from "../ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <main className="bg-white fixed w-full top-10 z-[1000]">
      <header className="container py-1">
        <article className="flex flex-row justify-between items-center gap-4">
          <div className="flex flex-row justify-between items-center gap-4">
            <div>
              <Link href="/">
                <Image src={Logo} width={100} height={100} alt="Logo" />
              </Link>
            </div>
          </div>
          <nav className="list-none lg:flex flex-row justify-end items-center hidden">
            <Link
              href={"/"}
              className="text-md mx-2 font-semibold text-primary px-4 py-2 transition-colors duration-600 ease-in-out">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span className="text-md mx-2 cursor-pointer flex flex-row items-center gap-2 font-semibold text-primary px-4 py-2 transition-colors duration-600 ease-in-out">
                  Services <IoIosArrowDown />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-106">
                <DropdownMenuGroup>
                  {/* {servicesData.map((items) =>
                    items?.link ? (
                      <DropdownMenuSub key={items?.name}>
                        <Link
                          className="cursor-pointer"
                          href={
                            items.link.startsWith("/")
                              ? items.link
                              : `/services/${items.link}`
                          }>
                          <DropdownMenuItem>
                            <span>{items?.name}</span>
                          </DropdownMenuItem>
                        </Link>
                      </DropdownMenuSub>
                    ) : null
                  )} */}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href={"/about"}
              className="text-md mx-2 font-semibold text-primary px-4 py-2 transition-colors duration-600 ease-in-out">
              About
            </Link>
            <Link
              href={"/blogs"}
              className="text-md mx-2 font-semibold text-primary px-4 py-2 transition-colors duration-600 ease-in-out">
              Blogs
            </Link>
            <Link
              href={"/contact"}
              className="text-md mx-2 font-semibold text-primary px-4 py-2 transition-colors duration-600 ease-in-out">
              Contact
            </Link>
          </nav>
          <Link href={"/contact"} className="lg:flex hidden">
            <Button
              size="lg"
              variant="primary"
              className="flex gap-2 text-white bg-primary font-semibold items-center">
              Enquire <MdArrowForward />
            </Button>
          </Link>
          <div className="lg:hidden flex">
            <MobileNav />
          </div>
        </article>
      </header>
    </main>
  );
};

export default Header;
