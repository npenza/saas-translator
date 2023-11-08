import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

function UserAvatar({
  name,
  image,
  className,
}: {
  name: string;
  image: string;
  className?: string;
}) {
  return (
    <div>
      <Avatar className={cn("bg-white text-black", className)}>
        {image && (
          <Image
            src={image}
            alt={name}
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
        <AvatarFallback
          delayMs={1000}
          className="dark:bg-white dark:text-black"
        >
          {name
            ?.split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
    </div>
  );
}

export default UserAvatar;
