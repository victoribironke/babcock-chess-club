"use client";

import { cn } from "@/lib/utils";

const PageLoader = ({ fullScreen }: { fullScreen?: boolean }) => {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center",
        fullScreen ? "h-screen" : "h-auto p-4"
      )}
    >
      <div className="size-6 border-2 border-blue rounded-full bg-transparent border-b-transparent animate-spin" />
    </div>
  );
};

export default PageLoader;
