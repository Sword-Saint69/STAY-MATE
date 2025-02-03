import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#FF8989]">About</p>
          <h2 className="py-2 text-gray-600">분실 커뮤니티를 통한 잃어버린 물건 찾기</h2>
          <p>{"'"}기숙사에서 잃어버린 물건을 찾고 싶어요{"'"}</p>
          <p className="py-2 text-gray-600">
          기숙사 생활을 하면서 물건 혹은 옷을 잃어버린 경우가 있었는데요. 누군가 발견해서 찾을 수 있으면 다행이지만, 그렇지 못하는 경우도 있습니다.
          또 학교 분실물 바구니가 있지만, 찾아가지 않는 학생들을 위해 잃어버린 물건을 모두 되찾아 갈 수 있는 커뮤니티를 만들었습니다.
          </p>
          <p className="py-2 text-gray-600">
          {/* I started web developement in 2013 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. In my spare
            time I run Code Commerce, a Youtube channel where I teach web
            developement and various front-end technologies. */}
          </p>
          {/* <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects.</p> */}
        </div>
        <div className="'w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src="/assets/profile.jpg" width="300" height="100" alt="/" className="rounded-xl" />
        </div>
        <div className="'w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src="/assets/profile2.jpg" width="300" height="100" alt="/" className="rounded-xl" />
        </div>
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#FF8989]">About</p>
          <h2 className="py-2 text-gray-600">수기로 작성하던 입소 확인을 온라인으로 간편하게</h2>
          <p> {"'"}매 입소때마다 수기로 작성하는게 불편해요.{"'"} </p>
          <p className="py-2 text-gray-600">
          저희 학교는 매주 금요일 집으로 갔다가 일요일에 귀사를 합니다. 이때 기숙사 입소 확인 서명을 하고 들어와야 합니다. 대다수의 학생들은 짐을 가지고 왔다갔다 해야하는 불편함을 겪습니다.
          이를 간소화하고 학생들이 편안할 수 있게 입소 서명을 온라인으로 받을 수 있도록 합니다.
          </p>
          <p className="py-2 text-gray-600">
          {/* I started web developement in 2013 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. In my spare
            time I run Code Commerce, a Youtube channel where I teach web
            developement and various front-end technologies. */}
          </p>
          {/* <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects.</p> */}
        </div>
      </div>
    </div>
  );
};

export default About;
