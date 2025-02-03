import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <main id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            <Image src="/assets/mainLogo.png" alt="/" width="350" height="350" />
            <span className="text-[#3C0808]">StayMate</span>
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Main;
