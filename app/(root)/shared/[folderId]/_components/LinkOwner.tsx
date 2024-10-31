"use client";

import { useState } from "react";
import Image from "next/image";

import { Folder } from "@/types/folder/Folder";
import { User } from "@/types/user/User";
import { DEFAULT_AVATAR } from "@/constants/constants";

interface LinkOwnerProps {
  user: User;
  folderData: Folder;
}

const LinkOwner = ({ user, folderData }: LinkOwnerProps) => {
  const [imageSource, setImageSource] = useState(
    user.image_source || DEFAULT_AVATAR,
  );

  const handleImageError = () => {
    if (imageSource !== DEFAULT_AVATAR) {
      setImageSource(DEFAULT_AVATAR);
    }
  };

  return (
    <div className="flex flex-col items-center bg-linkbrary-gray_5 pb-[50px] dark:bg-linkbrary-black">
      <div>
        <Image
          src={user.image_source || DEFAULT_AVATAR}
          alt="user avatar"
          width={60}
          height={60}
          className="rounded-full"
          onError={handleImageError}
        />
      </div>
      <div className="mt-3 text-base">@{user.name}</div>
      <div className="mt-5 text-[40px] font-semibold">{folderData.name}</div>
    </div>
  );
};

export default LinkOwner;
