import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-linkbrary-navy flex items-center justify-between px-[104px] pb-[64px] pt-8">
      <div className="text-linkbrary-gray_8">©codeit - 2023</div>
      <div className="text-linkbrary-gray_9">
        <div>Privacy Policy</div>
        <div>FAQ</div>
      </div>
      <div className="flex space-x-3">
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
