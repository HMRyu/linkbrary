"use client";

import { useState } from "react";
import Image from "next/image";

import useModal from "@/app/store/use-modal-store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

const ShareFolder = () => {
  const { toast } = useToast();
  const { isOpen, onClose, type, data } = useModal();
  const [copied, setCopied] = useState<boolean>(false);

  const isModalOpen = isOpen && type === "shareFolder";

  const handleCopy = async (folderId: number) => {
    try {
      const url = `localhost:3000/shared/${folderId}`;

      await navigator.clipboard.writeText(url);

      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        variant: "destructive",
        description: "링크를 복사하는 데 실패했습니다. 다시 시도해주세요.",
      });
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            폴더 공유
          </DialogTitle>
        </DialogHeader>
        <DialogDescription />
        <div className="flex justify-center">
          <div>{data.selectedFolderName}</div>
        </div>
        <div
          className="flex cursor-pointer justify-center"
          onClick={() => handleCopy(data.selectedFolderId)}
        >
          {copied ? (
            <div className="flex flex-col items-center">
              <Image
                src="/images/modal/check.png"
                alt="check"
                width={14}
                height={14}
              />
              <div>공유 링크가 복사되었습니다!</div>
            </div>
          ) : (
            <Image
              src="/images/add-link/link.png"
              alt="link"
              width={18}
              height={18}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareFolder;
