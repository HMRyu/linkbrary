export type ModalType =
  | "editFolder"
  | "addFolder"
  | "shareFolder"
  | "deleteFolder"
  | "deleteLink"
  | "addLink";

export interface ModalStore {
  type: ModalType | null;
  data: any;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: any) => void;
  onClose: () => void;
}
