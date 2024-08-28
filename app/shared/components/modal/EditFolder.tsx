"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import useModal from "@/app/store/use-modal-store";
import Input from "../input/Input";
import Button from "../button/Button";
import editFolder from "@/app/actions/folder/editFolder";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
      const action = await editFolder(data.selectedFolderId, inputValue);

      if (!action.success) {
        toast({
          variant: "destructive",
          description: action.message,
        });

        return;
      }

      onClose();
      setInputValue("");
      data.setSelectedFolderName(inputValue);
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
          <div className="rounded-md border border-linkbrary-primary">
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
