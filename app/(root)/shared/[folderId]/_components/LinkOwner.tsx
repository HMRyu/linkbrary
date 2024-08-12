import Image from "next/image";

import { Folder } from "@/types/folder/Folder";
import { User } from "@/types/user/User";

interface LinkOwnerProps {
  user: User;
  folderData: Folder;
}

const LinkOwner = ({ user, folderData }: LinkOwnerProps) => {
  return (
    <div className="bg-linkbrary-gray_5 dark:bg-linkbrary-black flex flex-col items-center pb-[50px]">
      <div>
        <Image
          src={user.image_source}
          alt="user avatar"
          width={60}
          height={60}
          className="rounded-full"
        />
      </div>
      <div className="mt-3 text-base">@{user.name}</div>
      <div className="mt-5 text-[40px] font-semibold">{folderData.name}</div>
    </div>
  );
};

export default LinkOwner;
