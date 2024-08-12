"use client";

import React from "react";
import useModal from "../store/use-modal-store";

const Page = () => {
  const { onOpen } = useModal();

  return (
    <div>
      <button onClick={() => onOpen("editFolder")}>editfolder</button>
      <button onClick={() => onOpen("addFolder")}>addfolder</button>
      <button onClick={() => onOpen("deleteFolder")}>deletefolder</button>
      <button onClick={() => onOpen("deleteLink")}>deleteLink</button>
      <button onClick={() => onOpen("addLink")}>addLink</button>
      <button onClick={() => onOpen("shareFolder")}>shareFolder</button>
    </div>
  );
};

export default Page;
