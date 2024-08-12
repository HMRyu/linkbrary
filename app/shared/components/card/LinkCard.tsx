import { useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  calculateTimeDiff,
  fixUrl,
  formatDate,
  formattedUrl,
} from "@/lib/utils";
import { LinkType } from "@/types/link/Link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteLink } from "@/app/api/link/deleteLink";
import useModal from "@/app/store/use-modal-store";
import { Folder } from "@/types/folder/Folder";
import Spinner from "../spinner/Spinner";
import { useToast } from "@/components/ui/use-toast";

interface LinkCardProps {
  link: LinkType;
  folders?: Folder[];
}

const LinkCard = ({ link, folders }: LinkCardProps) => {
  const { onOpen } = useModal();
  const { toast } = useToast();

  const router = useRouter();
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();

  const handleDeleteClick = async (id: number) => {
    startTransition(async () => {
      try {
        await deleteLink(id);

        router.refresh();
      } catch (error) {
        toast({
          variant: "destructive",
          description: "링크를 삭제하는 데 실패했습니다. 다시 시도해주세요.",
        });
      }
    });
  };

  const handleAddLinkToFolder = (url: string) => {
    onOpen("addLink", { url, folders });
  };

  return (
    <div className="flex justify-center">
      <div className="dark:bg-linkbrary-black flex h-[350px] w-80 flex-1 flex-col overflow-hidden rounded-lg bg-white shadow-md">
        <Link href={formattedUrl(link.url)}>
          <div className="relative h-60 w-full overflow-hidden">
            {link.image_source ? (
              <Image
                src={fixUrl(link.image_source)}
                alt="link-image"
                layout="fill"
                className="object-cover"
              />
            ) : (
              <Image
                src="/images/card/no-image.png"
                alt="no-image"
                layout="fill"
                className="object-cover"
              />
            )}
          </div>
        </Link>
        <div className="flex flex-1 flex-col p-4">
          <div className="mb-2 flex items-center justify-between">
            <div className="text-linkbrary-gray_2 text-xs">
              {calculateTimeDiff(link.created_at)}
            </div>
            <div>
              {isPending ? (
                <Spinner />
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    {!pathname.includes("shared") && (
                      <Image
                        src="/images/card/kebab.png"
                        alt="kebab"
                        width={21}
                        height={17}
                      />
                    )}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="flex flex-col items-center">
                    <DropdownMenuItem
                      onClick={() => handleDeleteClick(link.id)}
                    >
                      삭제하기
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleAddLinkToFolder(link.url)}
                    >
                      폴더에 추가
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="mb-2 truncate text-sm">
              {link.description || "상세 설명이 없습니다."}
            </div>
            <div className="text-linkbrary-gray_2 text-sm">
              {formatDate(link.created_at)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;