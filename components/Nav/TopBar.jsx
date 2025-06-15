import React from "react";
import { MdCall, MdEmail } from "react-icons/md";
import { Button } from "../ui/button";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

const TopBar = () => {
  return (
    <main className="bg-primary w-full fixed top-0 z-[1000]">
      <section className="container p-2">
        <article className="flex flex-row justify-between ">
          <div className="flex flex-row ">
            <Link target="_blank" href={"/"}>
              <Button
                variant="outline"
                className="flex gap-2 text-white bg-transparent font-semibold items-center">
                <IoLogoWhatsapp className="" /> Chat with us
              </Button>
            </Link>

            <a href={"/"}>
              <Button
                variant="outline"
                className="ml-4 flex gap-2 text-white bg-transparent font-semibold items-center">
                <MdEmail /> Email us
              </Button>
            </a>

            <Link href={"/"} className="md:hidden lg:hidden flex">
              <Button
                variant="outline"
                className="ml-4 flex gap-2 text-white bg-transparent font-semibold items-center">
                Get Quote
              </Button>
            </Link>
          </div>

          <div className="hidden md:flex lg:flex">
            <Link href={"/"}>
              <Button
                variant="outline"
                className="flex gap-2 text-white bg-transparent font-semibold items-center">
                <MdCall /> +91-0000000000
              </Button>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
};

export default TopBar;
