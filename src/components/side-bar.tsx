"use client";

import Link from "next/link";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./mode-toggle";
import {
  Briefcase,
  FolderGit,
  Phone,
  Presentation,
  UserRoundCog,
  LogOut,
} from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const TopbarItems = [
  {
    label: "Career",
    ref: "#career",

    icon: <Briefcase />,
  },
  {
    label: "Skills",
    ref: "#skills",
    icon: <UserRoundCog />,
  },
  {
    label: "Projects",
    ref: "",
    icon: <Presentation />,
  },
  {
    label: "Git Repos",
    ref: "",
    icon: <FolderGit />,
  },
  {
    label: "Get in Touch",
    ref: "#contact",
    icon: <Phone />,
  },
];

const Sidebar = () => {
  return (
    <div className="flex justify-between items-center flex-col h-full">
      <div className="flex gap-5 flex-col">
        <Avatar className="mx-auto">
          <AvatarImage src="https://avatars.githubusercontent.com/u/20420550?v=4" />
          <AvatarFallback>V</AvatarFallback>
        </Avatar>
        <Separator />

        {TopbarItems.map((item) => (
          <Link href={item.ref} scroll passHref key={item.label}>
            <Button
              className="bg-transperent border-0 w-full justify-center lg:justify-start items-center"
              variant="outline"
              size="icon"
            >
              <div className="flex gap-4 m-3">
                {item.icon}
                <p className="hidden lg:block">{item.label}</p>
              </div>
            </Button>
          </Link>
        ))}
      </div>
      <div className="flex flex-col w-full items-center gap-2">
        <Separator />
        <Link href="https://viggu18.vercel.app/">
          <Button
            className="bg-transperent border-0 w-full"
            variant="outline"
            size="icon"
          >
            <LogOut />
          </Button>
        </Link>
        <Separator />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Sidebar;
