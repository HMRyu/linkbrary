import useModal from "@/app/store/use-modal-store";
import Button from "../button/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const DeleteLink = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "deleteLink";

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            링크 삭제
          </DialogTitle>
        </DialogHeader>
        <DialogDescription />
        <div className="flex justify-center">
          <div>링크명</div>
        </div>
        <div>
          <Button text="삭제하기" variant="delete" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteLink;
