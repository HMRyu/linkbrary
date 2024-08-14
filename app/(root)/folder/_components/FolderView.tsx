"use client";

import React, { useState } from "react";
import Image from "next/image";

import FolderButton from "@/app/shared/components/button/FolderButton";
import LinkCard from "@/app/shared/components/card/LinkCard";
import useModal from "@/app/store/use-modal-store";
import { Folder } from "@/types/folder/Folder";
import { LinkType } from "@/types/link/Link";

interface FolderViewProps {
  folders: Folder[];
  links: LinkType[];
  searchText: string;
}

const FolderView = ({ folders, links, searchText }: FolderViewProps) => {
  const { onOpen } = useModal();

  const [selectedFolderId, setSelectedFolderId] = useState<
    string | number | null
  >(null);
  const [selectedFolderName, setSelectedFolderName] = useState<string | null>(
    "전체",
  );

  const filteredLinks = links
    .filter((link) => {
      const matchesFolder = selectedFolderId
        ? link.folder_id?.toString() === selectedFolderId
        : true;
      return matchesFolder;
    })
    .filter((link) => {
      const matchesSearch = link?.url
        ?.toLowerCase()
        .includes(searchText.toLowerCase());
      return matchesSearch;
    });

  const handleFolderClick = (id: string, name: string) => {
    setSelectedFolderId(id);
    setSelectedFolderName(name);
  };

  return (
    <div>
      <div className="mt-10">
        <div className="flex justify-between">
          <div className="flex flex-wrap">
            <FolderButton
              text="전체"
              onClick={() => {
                setSelectedFolderId(null);
                setSelectedFolderName("전체");
              }}
              selected={selectedFolderId === null}
            />
            {folders.map((folder) => (
              <div key={folder.id}>
                <FolderButton
                  text={folder.name}
                  folderId={folder.id.toString()}
                  onClick={(id) => handleFolderClick(id, folder.name)}
                  selected={selectedFolderId === folder.id.toString()}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-nowrap items-center space-x-1">
            <div
              className="cursor-pointer whitespace-nowrap text-linkbrary-primary"
              onClick={() => {
                onOpen("addFolder", folders);
              }}
            >
              폴더 추가
            </div>
            <Image
              src="/images/folder/add.png"
              alt="add"
              width={16}
              height={16}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <div className="text-2xl font-semibold">{selectedFolderName}</div>
          {selectedFolderName !== "전체" ? (
            <div className="flex space-x-4">
              <div
                className="flex cursor-pointer items-center"
                onClick={() =>
                  onOpen("shareFolder", {
                    selectedFolderName,
                    selectedFolderId,
                  })
                }
              >
                <Image
                  src="/images/folder/share.png"
                  alt="share"
                  width={16}
                  height={16}
                />
                <div className="font-semibold text-linkbrary-gray_2">공유</div>
              </div>
              <div
                className="flex cursor-pointer items-center"
                onClick={() =>
                  onOpen("editFolder", {
                    selectedFolderId,
                    selectedFolderName,
                    setSelectedFolderName,
                  })
                }
              >
                <Image
                  src="/images/folder/pen.png"
                  alt="pen"
                  width={16}
                  height={16}
                />
                <div className="font-semibold text-linkbrary-gray_2">
                  이름 변경
                </div>
              </div>
              <div
                className="flex cursor-pointer items-center"
                onClick={() =>
                  onOpen("deleteFolder", {
                    selectedFolderId,
                    selectedFolderName,
                  })
                }
              >
                <Image
                  src="/images/folder/delete.png"
                  alt="delete"
                  width={16}
                  height={16}
                />
                <div className="font-semibold text-linkbrary-gray_2">삭제</div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="mt-3 grid min-h-[350px] grid-cols-1 gap-4 py-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredLinks.length === 0 ? (
            <div>저장된 링크가 없습니다.</div>
          ) : (
            filteredLinks.map((link) => (
              <div key={link.id}>
                <LinkCard link={link} folders={folders} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FolderView;
