"use client";

import Image from "next/image";
import Button from "../button/Button";
import useModal from "@/app/store/use-modal-store";
import { Folder } from "@/types/folder/Folder";
import { LinkType } from "@/types/link/Link";
import React, { useState } from "react";

interface AddLinkProps {
  folders: Folder[];
  links: LinkType[];
}

const AddLink = ({ folders, links }: AddLinkProps) => {
  const [inputText, setInputText] = useState<string>("");

  const { onOpen } = useModal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onOpen("addLink", { folders, links, inputText, setInputText });
  };

  return (
    <form
      className="border-linkbrary-primary dark:bg-linkbrary-black flex w-full items-center rounded-xl border px-2 py-[10px] md:px-5 md:py-4"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-grow items-center space-x-3">
        <div className="h-4 w-4 md:h-5 md:w-5">
          <Image
            src="/images/add-link/link.png"
            alt="link"
            layout="responsive"
            width={16}
            height={16}
          />
        </div>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="링크를 추가해 보세요."
          className="dark:bg-linkbrary-black flex-grow py-1 text-sm outline-none md:text-base"
        />
      </div>
      <div>
        <Button text="추가하기" />
      </div>
    </form>
  );
};

export default AddLink;
