import getCurrentUser from "@/app/api/user/getCurrentUser";
import { getFolderData } from "@/app/api/folder/getFolderData";
import { getLinkData } from "@/app/api/link/getLinkData";
import AddLink from "@/app/shared/components/add-link/AddLink";
import FolderClient from "./_components/FolderClient";

const FolderPage = async () => {
  const currentUser = await getCurrentUser();

  const user = currentUser?.data[0];

  const folderData = await getFolderData(user.id);
  const linkData = await getLinkData(user.id);

  const folders = folderData.data.data;
  const links = linkData.data.data;

  return (
    <div>
      <div className="flex justify-center bg-linkbrary-gray_5 py-5 dark:bg-linkbrary-black">
        <div className="mx-8 mb-[90px] mt-[60px] w-[800px] rounded-xl bg-white shadow-lg">
          <AddLink folders={folders} links={links} />
        </div>
      </div>
      <FolderClient folders={folders} links={links} />
    </div>
  );
};

export default FolderPage;
