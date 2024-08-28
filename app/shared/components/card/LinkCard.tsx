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
import deleteLink from "@/app/actions/link/deleteLink";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
      const action = await deleteLink(id);

      if (!action.success) {
        toast({
          variant: "destructive",
          description: action.message,
        });

        return;
      }
    });
  };

  const handleAddLinkToFolder = (url: string) => {
    onOpen("addLink", { url, folders });
  };

  return (
    <div className="flex justify-center">
      <div className="flex h-[350px] w-80 flex-1 flex-col overflow-hidden rounded-lg bg-white shadow-md dark:bg-linkbrary-black">
        <Link
          href={formattedUrl(link.url)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative h-60 w-full overflow-hidden">
            {link.image_source ? (
              <Image
                src={fixUrl(link.image_source)}
                alt="link-image"
                layout="fill"
                className="object-contain"
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
            <div className="text-xs text-linkbrary-gray_2">
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
                        src="/images/card/kebab.svg"
                        alt="kebab"
                        width={21}
                        height={17}
                        className="dark:hidden"
                      />
                    )}
                    {!pathname.includes("shared") && (
                      <Image
                        src="/images/card/white-kebab.svg"
                        alt="kebab"
                        width={21}
                        height={17}
                        className="hidden dark:block"
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
                      다른 폴더로 이동
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
            <div className="text-sm text-linkbrary-gray_2">
              {formatDate(link.created_at)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
