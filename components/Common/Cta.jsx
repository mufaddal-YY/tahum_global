"use client"
import React from "react";
import EnquiryForm from "./EnquiryForm";

const Cta = () => {
  return (
    <main className="bg-white">
      <section className="flex flex-col lg:flex-row min-h-[550px] overflow-hidden">
        {/* Left - Background Image */}
        <div
          className="w-full hidden md:flex lg:flex lg:w-1/2 h-[550px] lg:h-auto bg-center bg-cover"
          style={{
            backgroundImage: "url('/ctaBg.png')",
          }}></div>

        {/* Right - Dark Background with Text */}
        <div className="w-full lg:w-1/2 bg-primary text-white p-4">
          <EnquiryForm/>
        </div>
      </section>
    </main>
  );
};

export default Cta;
