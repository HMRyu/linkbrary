import Image from "next/image";

const Spinner = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/images/modal/spinner.svg"
        alt="spinner"
        width={24}
        height={24}
      />
    </div>
  );
};

export default Spinner;
