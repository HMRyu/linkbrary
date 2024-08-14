"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import useModal from "@/app/store/use-modal-store";
import Button from "../button/Button";
import { Folder } from "@/types/folder/Folder";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { addLink } from "@/app/api/link/addLink";
import Spinner from "../spinner/Spinner";
import { useToast } from "@/components/ui/use-toast";

const AddLink = () => {
  const router = useRouter();
  const { toast } = useToast();

  const { isOpen, onClose, type, data } = useModal();

  const [selectedFolderId, setSelectedFolderId] = useState<number | undefined>(
    undefined,
  );

  const [isPending, startTransition] = useTransition();

  const isModalOpen = isOpen && type === "addLink";

  const handleFolderClick = (folderId: number) => {
    setSelectedFolderId(folderId);
  };

  const handleAddClick = async () => {
    startTransition(async () => {
      try {
        const linkUrl = data.inputText ? data.inputText : data.url;

        const res = await addLink(linkUrl, selectedFolderId);

        onClose();

        if (data?.setInputText) {
          data.setInputText("");
        }

        router.refresh();
      } catch (error) {
        console.error(error);
        toast({
          variant: "destructive",
          description: "링크를 추가하는 데 실패했습니다. 다시 시도해주세요.",
        });
      }
    });
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="flex max-h-[80vh] flex-col">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            폴더에 추가
          </DialogTitle>
        </DialogHeader>
        <DialogDescription />
        <div className="flex-1 overflow-y-auto">
          <div className="mb-2 text-center text-lg font-semibold">
            {data.inputText}
          </div>
          {data?.folders?.map((folder: Folder) => {
            return (
              <div
                key={folder.id}
                className={`flex items-center justify-between rounded-md p-2 hover:bg-linkbrary-gray_5 dark:hover:bg-linkbrary-gray_1 dark:hover:text-linkbrary-black ${selectedFolderId === folder.id ? "bg-linkbrary-gray_5 text-linkbrary-black" : ""}`}
                onClick={() => handleFolderClick(folder.id)}
              >
                <div>{folder.name}</div>
                {selectedFolderId === folder.id ? (
                  <Image
                    src="/images/modal/check.png"
                    alt="check"
                    width={14}
                    height={14}
                  />
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </div>
        <div onClick={handleAddClick}>
          {isPending ? <Spinner /> : <Button text="추가하기" />}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddLink;
