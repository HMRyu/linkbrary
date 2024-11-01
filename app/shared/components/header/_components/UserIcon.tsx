"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Button from "../../button/Button";
import { deleteAccessToken } from "@/app/api/cookies";
import { User } from "@/types/user/User";
import Spinner from "../../spinner/Spinner";
import { DEFAULT_AVATAR } from "@/constants/constants";

const UserIcon = ({ user }: { user: User }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleLogoutClick = async () => {
    await deleteAccessToken();

    alert("로그아웃 되었습니다.");
  };

  const handleButtonClick = () => {
    startTransition(() => {
      router.push("/signin");
    });
  };

  return (
    <div className="w-[80px] md:w-[128px]">
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={user.image_source} />
                <AvatarFallback>
                  <Image
                    src={DEFAULT_AVATAR}
                    alt="default-avatar"
                    width={48}
                    height={48}
                  />
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block">{user.email}</div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleLogoutClick}>
              로그아웃
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div onClick={handleButtonClick} className="cursor-pointer">
          {isPending ? <Spinner /> : <Button text="로그인" />}
        </div>
      )}
    </div>
  );
};

export default UserIcon;
