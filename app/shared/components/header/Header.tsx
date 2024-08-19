import Image from "next/image";
import Link from "next/link";

import getCurrentUser from "@/app/actions/user/getCurrentUser";
import UserIcon from "./_components/UserIcon";
import ThemeButton from "../button/ThemeButton";

const Header = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="w-full bg-linkbrary-gray_5 py-[13px] dark:bg-linkbrary-black md:py-5">
      <div className="mx-8 flex items-center justify-between md:mx-[200px]">
        <div>
          <Link href="/">
            <Image
              src="/images/header/logo.svg"
              alt="logo"
              width={133}
              height={24}
            />
          </Link>
        </div>
        <div className="flex items-center space-x-3">
          <ThemeButton />
          <UserIcon user={currentUser} />
        </div>
      </div>
    </div>
  );
};

export default Header;
