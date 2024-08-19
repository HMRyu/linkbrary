import AddLink from "@/app/shared/components/add-link/AddLink";
import FolderClient from "./_components/FolderClient";
import getCurrentUser from "@/app/actions/user/getCurrentUser";
import getFolderData from "@/app/actions/folder/getFolderData";
import getLinkData from "@/app/actions/link/getLinkData";

const FolderPage = async () => {
  const currentUser = await getCurrentUser();

  const user = currentUser;

  const folderData = await getFolderData(user.id);
  const linkData = await getLinkData(user.id);

  const folders = folderData;
  const links = linkData;

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
