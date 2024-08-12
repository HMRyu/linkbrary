interface FolderButtonProps {
  text: string;
  folderId?: string;
  onClick?: (id: string) => void;
  selected?: boolean;
}

const FolderButton = ({
  text,
  folderId,
  onClick,
  selected,
}: FolderButtonProps) => {
  // onClick 함수와 folderId 존재 여부 판단
  const handleClick = () => {
    if (onClick && folderId !== undefined) {
      onClick(folderId);
    } else if (onClick) {
      onClick("");
    }
  };

  return (
    <button
      className={`border-linkbrary-primary mb-1 mr-1 rounded-lg border-2 px-[10px] py-[6px] text-sm md:px-3 md:py-2 md:text-base ${selected ? "bg-linkbrary-primary text-linkbrary-white" : ""}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default FolderButton;
