"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "../ui/separator";

const MobileNav = ({ categoryData }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="text-primary cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="z-[1001] bg-primary">
        <SheetTitle></SheetTitle>
        <div className="grid py-4 mt-4 list-none space-y-2 ">
          <Link
            href={"/"}
            className="text-md font-semibold text-white px-4 py-2 ease-in-out">
            <SheetClose>Home</SheetClose>
          </Link>

          {/* {categoryData?.map((items) => (
              
                <Link
                  href={`/categories/${items?.slug}`}
                  className="text-md pl-6 font-semibold text-white px-4 py-2 ease-in-out">
                  <SheetClose>{items?.headline}</SheetClose>
                </Link>
             
            ))} */}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="text-md cursor-pointer flex flex-row items-center gap-2 font-semibold text-white px-4 py-2 transition-colors duration-600 ease-in-out">
                Categories <IoIosArrowDown />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72">
              <DropdownMenuGroup>
                {categoryData?.map((items) => (
                  <DropdownMenuSub key={items?.headline}>
                    <Link
                      className="cursor-pointer"
                      href={`/categories/${items?.slug}`}>
                      <DropdownMenuItem>
                        <SheetClose>
                          <span>{items?.headline}</span>
                        </SheetClose>
                      </DropdownMenuItem>
                    </Link>
                    <Separator className="my-1" />
                  </DropdownMenuSub>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href={"/about"}
            className="text-md font-semibold text-white px-4 py-2">
            <SheetClose>About</SheetClose>
          </Link>
          <Link
            href={"/blog"}
            className="text-md font-semibold text-white px-4 py-2">
            <SheetClose>Blog</SheetClose>
          </Link>

          {/* <Link
            href={"/contact"}
            className="text-md font-semibold text-white px-4 py-2">
            <SheetClose>Contact</SheetClose>
          </Link> */}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
