"use client";

import Link from "next/link";
import React, { useState } from "react";

import { ModeToggle } from "./mode-toggle";
import { LogOut } from "lucide-react";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

import { SidebarItems } from "./data";
import ProfileIcon from "./profile-icon";

const Sidebar = () => {
  return (
    <div className="flex justify-between items-center flex-col h-full">
      <div className="flex gap-5 flex-col">
        <ProfileIcon />
        <Separator />

        {SidebarItems.map((item) => (
          <Link href={item.ref} scroll passHref key={item.label}>
            <Button
              className="bg-transperent border-0 w-full justify-center lg:justify-start items-center"
              variant="outline"
              size="icon"
            >
              <div className="flex gap-4 m-3 justify-center items-center">
                {item.icon}
                <p className="hidden lg:block">{item.label}</p>
              </div>
            </Button>
          </Link>
        ))}
      </div>

      <div className="fixed bottom-4 flex flex-col items-center gap-2 w-fit">
        <Separator />
        <Link href="https://viggu-v1.vercel.app">
          <Button className="bg-transperent border-0 w-full" variant="outline">
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
