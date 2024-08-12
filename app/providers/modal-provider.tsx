"use client";

import { useEffect, useState } from "react";

import AddFolder from "../shared/components/modal/AddFolder";
import DeleteFolder from "../shared/components/modal/DeleteFolder";
import DeleteLink from "../shared/components/modal/DeleteLink";
import EditFolder from "../shared/components/modal/EditFolder";
import ShareFolder from "../shared/components/modal/ShareFolder";
import AddLink from "../shared/components/modal/AddLink";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AddFolder />
      <AddLink />
      <DeleteFolder />
      <DeleteLink />
      <EditFolder />
      <ShareFolder />
    </>
  );
};

export default ModalProvider;
