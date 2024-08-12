import Image from "next/image";

const Landing = () => {
  return (
    <div className="hidden md:block">
      <div className="mb-[50px] mt-[120px] flex items-center justify-center space-x-[157px]">
        <div>
          <div className="text-[48px] font-bold">
            <span className="bg-gradient-to-r from-[#6D6AFE] to-[#FF9F9F] bg-clip-text text-transparent">
              원하는 링크
            </span>
            를
            <br />
            저장하세요
          </div>
          <div className="text-linkbrary-gray_10 text-base">
            나중에 읽고 싶은 글, 다시 보고 싶은 영상,
            <br />
            사고 싶은 옷, 기억하고 싶은 모든 것을
            <br />한 공간에 저장하세요.
          </div>
        </div>
        <div>
          <Image
            src="/images/hero/dog.png"
            alt="dog"
            width={550}
            height={450}
            layout="responsive"
          />
        </div>
      </div>
      <div className="mb-[50px] mt-[120px] flex items-center justify-center space-x-[157px]">
        <div>
          <Image
            src="/images/hero/edit-folder.png"
            alt="edit-folder"
            width={550}
            height={450}
            layout="responsive"
          />
        </div>
        <div>
          <div className="text-[48px] font-bold">
            링크를 폴더로
            <br />
            <span className="bg-gradient-to-r from-[#6FBAFF] to-[#FFD88B] bg-clip-text text-transparent">
              관리
            </span>
            하세요
          </div>
          <div className="text-linkbrary-gray_10 text-base">
            나만의 폴더를 무제한으로 만들고
            <br />
            다양하게 활용할 수 있습니다.
          </div>
        </div>
      </div>
      <div className="mb-[50px] mt-[120px] flex items-center justify-center space-x-[157px]">
        <div>
          <div className="text-[48px] font-bold">
            저장한 링크를
            <br />
            <span className="bg-gradient-to-r from-[#6D7CCD] to-[#528885] bg-clip-text text-transparent">
              공유
            </span>
            해 보세요
          </div>
          <div className="text-linkbrary-gray_10 text-base">
            여러 링크를 폴더에 담고 공유할 수 있습니다.
            <br />
            가족, 친구, 동료들에게 쉽고 빠르게 링크를
            <br />
            공유해 보세요.
          </div>
        </div>
        <div>
          <Image
            src="/images/hero/share-folder.png"
            alt="share-folder"
            width={550}
            height={450}
            layout="responsive"
          />
        </div>
      </div>
      <div className="mb-[50px] mt-[120px] flex items-center justify-center space-x-[157px]">
        <div>
          <Image
            src="/images/hero/search-folder.png"
            alt="search-folder"
            width={550}
            height={450}
            layout="responsive"
          />
        </div>
        <div>
          <div className="text-[48px] font-bold">
            저장한 링크를
            <br />
            <span className="bg-gradient-to-r from-[#6FBAFF] to-[#FFD88B] bg-clip-text text-transparent">
              검색
            </span>
            해 보세요
          </div>
          <div className="text-linkbrary-gray_10 text-base">
            중요한 정보들을 검색으로 쉽게 찾아보세요.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
