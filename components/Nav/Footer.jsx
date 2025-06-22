"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { MdEmail, MdCall } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = ({ categoryData, contactData }) => {
  return (
    <section className="py-4 bg-white">
      <div className="container">
        <div className="flex flex-wrap flex-col justify-between md:flex-row lg:flex-row p-2">
          <div className=" flex flex-col gap-2 mb-4 w-full md:w-1/2 lg:w-1/4">
            <div className="">
              <Link href={"/"} className="flex items-center">
                <Image width={100} height={50} src={Logo} alt="footer logo" />
              </Link>
            </div>
            {contactData?.map((data, idx) => (
            <div className="py-2" key={idx}>
              <div className="flex flex-row justify-start gap-4">
                <Link target="_blank" href={`${data?.linkedin}`} className="flex items-center">
                  <div className="border-2 rounded-full p-2 hover:border-[#1D3974] hover:text-[#1D3974]">
                    <FaLinkedin />
                  </div>
                </Link>
                <Link target="_blank" href={""} className="flex items-center">
                  <div className="border-2 rounded-full p-2 hover:border-[#1D3974] hover:text-[#1D3974]">
                    <FaInstagram />
                  </div>
                </Link>
                <Link target="_blank" href={""} className="flex items-center">
                  <div className="border-2 rounded-full p-2 hover:border-[#1D3974] hover:text-[#1D3974]">
                    <FaFacebookF />
                  </div>
                </Link>
              </div>
              <div className="my-4">
                <ul className="flex flex-col gap-4 text-sm">
                  <li className="text-md capitalize">
                    <Link href={`tel:${data?.contact}`} className="flex gap-2">
                      <span className="text-xl text-primary">
                        <MdCall />
                      </span>
                      Call us: {data?.contact}
                    </Link>
                  </li>
                  <li className="text-md">
                    <Link href={`/`} className="flex gap-2">
                      <span className="text-xl text-primary">
                        <MdEmail />
                      </span>
                      Email us: {data?.email}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 mb-4 w-full md:w-1/2 lg:w-1/4 p-2">
            <div className="mb-2 border-b-[1px] border-gray-400">
              <h3 className="text-[18px] uppercase md:text-md font-semibold mb-4">
                Quick Links
              </h3>
            </div>
            <div className="py-2">
              <ul className="flex flex-col gap-4 text-sm">
                {categoryData.map((item) => (
                  <li className="text-md capitalize" key={item?.headline}>
                    <Link href={`/categories/${item?.slug}`}>
                      {item?.headline}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-4 w-full md:w-1/2 lg:w-1/4 p-2">
            <div className="mb-2 border-b-[1px] border-gray-400">
              <h3 className="text-[18px] uppercase md:text-md font-semibold mb-4">
                Useful Links
              </h3>
            </div>
            <div className="py-2">
              <ul className="flex flex-col gap-4 text-sm">
                <li className="text-md capitalize">
                  <Link href={"/about"}>About</Link>
                </li>
                <li className="text-md capitalize">
                  <Link href={"/privacy-policy"}>Privacy Policy</Link>
                </li>
                <li className="text-md capitalize">
                  <Link href={"/refund-policy"}>Refund Policy</Link>
                </li>
                <li className="text-md capitalize">
                  <Link href={"/terms-conditions"}>Terms and Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="gap-2 mb-4 w-full md:w-1/2 lg:w-1/4 p-2">
            <div className="mb-2 border-b-[1px] border-gray-400">
              <h3 className="text-[18px] uppercase md:text-md font-semibold mb-4">
                Channel Parteners
              </h3>
            </div>
            <div className="py-2">
              {/* <ul className="flex flex-col gap-4 text-sm">
                <li className="text-md capitalize">
                  <Link href={`tel:+91-1234567890`} className="flex gap-2">
                    <span className="text-xl text-primary">
                      <MdCall />
                    </span>
                    Call us: +91-1234567890
                  </Link>
                </li>
                <li className="text-md">
                  <Link href={`/`} className="flex gap-2">
                    <span className="text-xl text-primary">
                      <MdEmail />
                    </span>
                    Email us: info@tahumglobal.com
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
        <hr />
        <div className="py-2 text-center font-regular items-center text-md text-primary">
          <span>© 2025 Tahum Global LLP. All Rights Reserved.</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
