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
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";
import { Separator } from "../ui/separator";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EnquiryForm from "../Common/EnquiryForm";

const Header = ({ categoryData }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main
      className={`fixed w-full top-10 z-[1000] transition-all duration-500 ${isScrolled ? "bg-white/50 backdrop-blur-lg shadow-custom" : "bg-transparent"}`}>
      <header className="container py-1">
        <article className="flex flex-row justify-between items-center gap-4">
          <div className="flex flex-row justify-between items-center gap-4">
            <div>
              <Link href="/">
                <Image src={Logo} width={120} height={100} alt="Logo" />
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
                  Categories <IoIosArrowDown />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                  {categoryData.map((items) =>
                    items?.slug ? (
                      <DropdownMenuSub key={items?.headline}>
                        <Link
                          className="cursor-pointer"
                          href={
                            items?.slug.startsWith("/")
                              ? items.slug
                              : `/categories/${items.slug}`
                          }>
                          <DropdownMenuItem>
                            <span>{items?.headline}</span>
                          </DropdownMenuItem>
                        </Link>
                        <Separator className="my-1" />
                      </DropdownMenuSub>
                    ) : null
                  )}
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
          
          <div className="lg:flex hidden">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="primary"
                  className="flex gap-2 text-white bg-primary font-semibold items-center">
                  Enquire <MdArrowForward />
                </Button>
              </DialogTrigger>
              <DialogContent className="">
                <EnquiryForm />
              </DialogContent>
            </Dialog>
          </div>

          {/* <Link href={"/contact"} className="lg:flex hidden"></Link> */}
          <div className="lg:hidden flex">
            <MobileNav categoryData={categoryData} />
          </div>
        </article>
      </header>
    </main>
  );
};

export default Header;
