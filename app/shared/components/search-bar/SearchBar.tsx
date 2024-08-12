import Image from "next/image";

interface SearchBarProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ searchText, setSearchText }: SearchBarProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="bg-linkbrary-gray_6 dark:bg-linkbrary-black flex w-full items-center rounded-md px-2 py-[10px] md:px-5 md:py-4">
      <div className="flex flex-grow items-center space-x-3">
        <div className="h-4 w-4 md:h-5 md:w-5">
          <Image
            src="/images/search-bar/search.png"
            alt="link"
            layout="responsive"
            width={16}
            height={16}
          />
        </div>
        <input
          placeholder="링크를 검색해 보세요."
          className="bg-linkbrary-gray_6 dark:bg-linkbrary-black flex-grow py-1 text-sm outline-none md:text-base"
          value={searchText}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
