import Image from "next/image";
import Link from "next/link";

import { getCurrentUser } from "@/app/api/user/getCurrentUser";
import UserIcon from "./_components/UserIcon";
import ThemeButton from "../button/ThemeButton";

const Header = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="bg-linkbrary-gray_5 dark:bg-linkbrary-black w-full py-[13px] md:py-5">
      <div className="mx-8 flex items-center justify-between md:mx-[200px]">
        <div>
          <Link href="/">
            <Image
              src="/images/header/logo.png"
              alt="logo"
              width={133}
              height={24}
            />
          </Link>
        </div>
        <div className="flex items-center space-x-3">
          <ThemeButton />
          <UserIcon user={currentUser?.data.data[0]} />
        </div>
      </div>
    </div>
  );
};

export default Header;
