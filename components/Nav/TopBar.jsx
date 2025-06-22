import React from "react";
import { MdCall, MdEmail } from "react-icons/md";
import { Button } from "../ui/button";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

const TopBar = ({ contactData }) => {
  return (
    <main className="bg-primary w-full fixed top-0 z-[1000]">
      <section className="container p-2">
        {contactData?.map((data, idx) => (
          <article className="flex justify-between items-center w-full" key={idx}>
            {/* Left item on mobile, hidden on large */}
            <Link
              target="_blank"
              className="flex gap-2 items-center text-md font-medium text-white lg:hidden"
              href={`mailto:${data?.email}`}>
              <MdEmail /> Email us
            </Link>

            {/* Right item on mobile, hidden on large */}
            <Link
              className="flex gap-2 items-center text-md font-medium text-white lg:hidden"
              href={`tel:${data?.contact}`}>
              <MdCall /> {data?.contact}
            </Link>

            {/* Both items together on right side for lg and up */}
            <div className="hidden lg:flex gap-4 ml-auto">
              <Link
                target="_blank"
                className="flex gap-2 items-center text-md font-medium text-white"
                href={`mailto:${data?.email}`}>
                <MdEmail /> Email us
              </Link>

              <Link
                className="flex gap-2 items-center text-md font-medium text-white"
                href={`tel:${data?.contact}`}>
                <MdCall /> {data?.contact}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default TopBar;
