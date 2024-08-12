"use client";

import { useState } from "react";

import LinkCard from "@/app/shared/components/card/LinkCard";
import SearchBar from "@/app/shared/components/search-bar/SearchBar";
import { LinkType } from "@/types/link/Link";

interface SharedClientProps {
  links: LinkType[];
}

const SharedClient = ({ links }: SharedClientProps) => {
  const [searchText, setSearchText] = useState<string>("");

  const filteredLinks = links.filter((link) => {
    const matchesSearch = link?.title
      ?.toLowerCase()
      .includes(searchText.toLowerCase());
    return matchesSearch;
  });

  return (
    <div>
      <div className="mx-8 mt-10 max-w-screen-lg xl:mx-auto">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredLinks.length === 0 ? (
            <div>검색 결과가 없습니다.</div>
          ) : (
            filteredLinks.map((link) => (
              <div key={link.id}>
                <LinkCard link={link} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SharedClient;
