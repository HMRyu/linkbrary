import { getFolderDataWithOwner } from "@/app/api/folder/getFolderDataWithOwner";
import { getLinkData } from "@/app/api/link/getLinkData";
import { getFolderOwner } from "@/app/api/user/getFolderOwner";
import LinkOwner from "./_components/LinkOwner";
import SharedClient from "./_components/SharedClient";

const SharedPage = async ({ params }: { params: { folderId: number } }) => {
  const rawFolderData = await getFolderDataWithOwner(params.folderId);

  const folderData = rawFolderData.data.data[0];

  const rawUser = await getFolderOwner(folderData.user_id);
  const userLinks = await getLinkData(folderData.user_id, folderData.id);

  const user = rawUser.data.data[0];

  return (
    <div>
      <LinkOwner user={user} folderData={folderData} />
      <SharedClient links={userLinks.data.data} />
    </div>
  );
};

export default SharedPage;
