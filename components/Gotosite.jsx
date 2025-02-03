import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Gotosite = () => {
  return (
    <main id="gotosite" className="w-full h-[500px] text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-lg tracking-widest text-gray-600">
            학생들의 편리함을 위해,
          </p>
          <h1 className="py-4 text-gray-700">
            
            <span className="text-[#3C0808]">StayMate</span>
          </h1>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <a
            href="https://www.naver.com"
            target="_blank"
            >
            지금 바로 이용해 보세요!
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Gotosite;
