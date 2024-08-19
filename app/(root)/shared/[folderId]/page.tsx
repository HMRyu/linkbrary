import getFolderDataWithOwner from "@/app/actions/folder/getFolderDataWithOwner";
import getFolderOwner from "@/app/actions/user/getFolderOwner";
import getLinkData from "@/app/actions/link/getLinkData";
import LinkOwner from "./_components/LinkOwner";
import SharedClient from "./_components/SharedClient";

const SharedPage = async ({ params }: { params: { folderId: number } }) => {
  const rawFolderData = await getFolderDataWithOwner(params.folderId);

  const folderData = rawFolderData;

  const rawUser = await getFolderOwner(folderData.user_id);
  const userLinks = await getLinkData(folderData.user_id, folderData.id);

  const user = rawUser;

  return (
    <div>
      <LinkOwner user={user} folderData={folderData} />
      <SharedClient links={userLinks} />
    </div>
  );
};

export default SharedPage;
