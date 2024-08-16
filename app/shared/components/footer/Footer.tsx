"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center justify-between bg-linkbrary-navy px-8 pb-[64px] pt-8">
      <div className="text-linkbrary-gray_8">©codeit - 2024</div>
      <div
        className="cursor-pointer text-linkbrary-gray_9"
        onClick={() => alert("기능 개발중입니다.")}
      >
        <div>Privacy Policy</div>
        <div>FAQ</div>
      </div>
      <div className="flex cursor-pointer space-x-3">
        <Link href="https://www.facebook.com/" target="_blank">
          <Image
            src="/images/footer/facebook.svg"
            alt="facebook"
            width={20}
            height={20}
          />
        </Link>
        <Link href="https://x.com/?lang=ko" target="_blank">
          <Image
            src="/images/footer/twitter.svg"
            alt="twitter"
            width={20}
            height={20}
          />
        </Link>
        <Link href="https://www.youtube.com/" target="_blank">
          <Image
            src="/images/footer/youtube.svg"
            alt="youtube"
            width={20}
            height={20}
          />
        </Link>
        <Link href="https://www.instagram.com/" target="_blank">
          <Image
            src="/images/footer/instagram.svg"
            alt="instagram"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
