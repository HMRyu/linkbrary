"use client";

import React, { useState } from "react";
import Image from "next/image";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputPlaceholder: string;
  inputName?: string;
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { inputPlaceholder, inputName, type = "text", value, onChange, ...props },
    ref,
  ) => {
    const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);

    const handleToggleEyeImage = () => {
      setIsEyeOpen((prev) => !prev);
    };

    return (
      <div className="bg-linkbrary-white dark:bg-linkbrary-black flex w-full items-center rounded-lg">
        <input
          placeholder={inputPlaceholder}
          name={inputName}
          type={`${type === "password" && isEyeOpen ? "text" : type}`}
          ref={ref}
          value={value}
          onChange={onChange}
          className="w-full rounded-md px-[15px] py-[18px] text-base outline-none"
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
