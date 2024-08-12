"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

import Button from "@/app/shared/components/button/Button";
import Spinner from "@/app/shared/components/spinner/Spinner";

const Hero = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleButtonClick = () => {
    startTransition(() => {
      router.push("/folder");
    });
  };

  return (
    <div className="bg-linkbrary-gray_5 dark:bg-linkbrary-black flex flex-col items-center justify-center space-y-10 px-8 md:px-0">
      <div className="text-center text-[32px] font-bold md:text-[64px]">
        <span className="bg-gradient-to-r from-[#6D6AFE] to-[#FF9F9F] bg-clip-text text-transparent">
          세상의 모든 정보
        </span>
        를
        <br />
        쉽게 저장하고 관리해 보세요
      </div>
      <div className="w-[350px]">
        {isPending ? (
          <Spinner />
        ) : (
          <div onClick={handleButtonClick}>
            <Button text="링크 추가하기" />
          </div>
        )}
      </div>
      <div className="w-screen px-8 md:w-[698px] xl:w-[1118px]">
        <Image
          src="/images/hero/hero.png"
          alt="hero"
          layout="responsive"
          width={1118}
          height={659}
        />
      </div>
    </div>
  );
};

export default Hero;
