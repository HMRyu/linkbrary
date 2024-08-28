import { useTransition } from "react";
import { useRouter } from "next/navigation";

import useModal from "@/app/store/use-modal-store";
import Button from "../button/Button";
import deleteFolder from "@/app/actions/folder/deleteFolder";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Spinner from "../spinner/Spinner";
import { useToast } from "@/components/ui/use-toast";

const DeleteFolder = () => {
  const router = useRouter();
  const { toast } = useToast();

  const { isOpen, onClose, type, data } = useModal();

  const isModalOpen = isOpen && type === "deleteFolder";

  const [isPending, startTransition] = useTransition();

  const handleDeleteClick = async () => {
    startTransition(async () => {
      const action = await deleteFolder(data.selectedFolderId);

      if (!action.success) {
        toast({
          variant: "destructive",
          description: action.message,
        });

        return;
      }

      onClose();
    });
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            폴더 삭제
          </DialogTitle>
        </DialogHeader>
        <DialogDescription />
        <div className="flex justify-center">
          <div>{data.selectedFolderName}</div>
        </div>
        <div onClick={handleDeleteClick}>
          {isPending ? (
            <Spinner />
          ) : (
            <Button text="삭제하기" variant="delete" />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteFolder;
