interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "delete";
}

const Button = ({ text, type, variant }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`w-full rounded-lg ${variant === "delete" ? "bg-rose-500" : "bg-linkbrary"} px-4 py-[10px] md:px-5 md:py-4`}
    >
      <div className="text-linkbrary-white text-sm md:text-lg">{text}</div>
    </button>
  );
};

export default Button;
