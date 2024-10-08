import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(time: Date) {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}. ${month}. ${day}`;
}

export const calculateTimeDiff = (time: Date): string => {
  const currentTime = new Date();
  const postTime = new Date(time);
  const diff = currentTime.getTime() - postTime.getTime();

  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = month * 12;

  let timeDiffString = "";

  if (diff < hour) {
    timeDiffString = `${Math.round(diff / minute)} minute${
      Math.round(diff / minute) === 1 ? "" : "s"
    } ago`;
  } else if (diff < day) {
    timeDiffString = `${Math.round(diff / hour)} hour${
      Math.round(diff / hour) === 1 ? "" : "s"
    } ago`;
  } else if (diff < month) {
    timeDiffString = `${Math.round(diff / day)} day${
      Math.round(diff / day) === 1 ? "" : "s"
    } ago`;
  } else if (diff < year) {
    timeDiffString = `${Math.round(diff / month)} month${
      Math.round(diff / month) === 1 ? "" : "s"
    } ago`;
  } else {
    timeDiffString = `${Math.round(diff / year)} year${
      Math.round(diff / year) === 1 ? "" : "s"
    } ago`;
  }

  return timeDiffString;
};

export const fixUrl = (url: string) => {
  if (url.startsWith("//")) {
    return "https:" + url;
  }
  return url;
};

export const formattedUrl = (url: string) => {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return "https://" + url;
  }
  return url;
};
