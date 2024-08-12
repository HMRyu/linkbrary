"use client";

import SearchBar from "@/app/shared/components/search-bar/SearchBar";
import FolderView from "./FolderView";
import { Folder } from "@/types/folder/Folder";
import { LinkType } from "@/types/link/Link";
import { useState } from "react";

interface FolderClientProps {
  folders: Folder[];
  links: LinkType[];
}

const FolderClient = ({ folders, links }: FolderClientProps) => {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <div className="mx-8 max-w-screen-lg xl:mx-auto">
      <div className="mt-10">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </div>
      <FolderView folders={folders} links={links} searchText={searchText} />
    </div>
  );
};

export default FolderClient;
