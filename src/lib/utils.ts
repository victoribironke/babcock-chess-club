import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const formatDateTime = (dateString: string | Date) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
