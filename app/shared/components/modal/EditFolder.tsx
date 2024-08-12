"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import useModal from "@/app/store/use-modal-store";
import Input from "../input/Input";
import Button from "../button/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { editFolder } from "@/app/api/folder/editFolder";
import Spinner from "../spinner/Spinner";
import { useToast } from "@/components/ui/use-toast";

const EditFolder = () => {
  const router = useRouter();
  const { toast } = useToast();

  const { isOpen, onClose, type, data } = useModal();

  const isModalOpen = isOpen && type === "editFolder";

  const [inputValue, setInputValue] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleEditClick = async () => {
    startTransition(async () => {
      try {
        await editFolder(data.selectedFolderId, inputValue);
        onClose();
        setInputValue("");
        data.setSelectedFolderName(inputValue);
        router.refresh();
      } catch (error) {
        toast({
          variant: "destructive",
          description: "폴더를 수정하는 데 실패했습니다. 다시 시도해주세요.",
        });
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleEditClick();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            폴더 이름 변경
          </DialogTitle>
        </DialogHeader>
        <DialogDescription />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="border-linkbrary-primary rounded-md border">
            <Input
              inputPlaceholder={data.selectedFolderName}
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div>
            {isPending ? <Spinner /> : <Button text="변경하기" type="submit" />}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditFolder;
