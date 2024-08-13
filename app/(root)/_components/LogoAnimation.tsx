"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LogoAnimation() {
  const [showLogo, setShowLogo] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!showLogo) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-linkbrary-black">
      <Image
        className="animate-fade-in-out"
        src="/images/header/logo.svg"
        alt="logo"
        width={300}
        height={100}
      />
    </div>
  );
}
