"use client";

import Image from "next/image";

const Footer = () => {
  const handleLogoClick = () => {
    alert("기능 개발중입니다.");
  };

  return (
    <div className="flex items-center justify-between bg-linkbrary-navy px-[104px] pb-[64px] pt-8">
      <div className="text-linkbrary-gray_8">©codeit - 2023</div>
      <div className="text-linkbrary-gray_9">
        <div>Privacy Policy</div>
        <div>FAQ</div>
      </div>
      <div className="flex cursor-pointer space-x-3" onClick={handleLogoClick}>
        <Image
          src="/images/footer/facebook.svg"
          alt="facebook"
          width={20}
          height={20}
        />
        <Image
          src="/images/footer/twitter.svg"
          alt="twitter"
          width={20}
          height={20}
        />
        <Image
          src="/images/footer/youtube.svg"
          alt="youtube"
          width={20}
          height={20}
        />
        <Image
          src="/images/footer/instagram.svg"
          alt="instagram"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default Footer;
