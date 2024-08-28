"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import useModal from "@/app/store/use-modal-store";
import Input from "../input/Input";
import Button from "../button/Button";
import addFolder from "@/app/actions/folder/addFolder";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Spinner from "../spinner/Spinner";
import { useToast } from "@/components/ui/use-toast";

const AddFolder = () => {
  const router = useRouter();
  const { toast } = useToast();

  const { isOpen, onClose, type, data } = useModal();

  const isModalOpen = isOpen && type === "addFolder";

  const [isPending, startTransition] = useTransition();

  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddClick = async () => {
    startTransition(async () => {
      const action = await addFolder(inputValue);

      if (!action.success) {
        toast({
          variant: "destructive",
          description: action.message,
        });

        return;
      }

      onClose();
      setInputValue("");
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleAddClick();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            폴더 추가
          </DialogTitle>
        </DialogHeader>
        <DialogDescription />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="rounded-sm border border-linkbrary-primary">
            <Input
              inputPlaceholder="내용 입력"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div>
            {isPending ? <Spinner /> : <Button text="추가하기" type="submit" />}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddFolder;
