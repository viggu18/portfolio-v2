"use client";

import Link from "next/link";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

const TopbarItems = [
  {
    label: "Career",
    ref: "#career",
  },
  {
    label: "Skills",
    ref: "#skills",
  },
  {
    label: "Projects",
    ref: "",
  },
  {
    label: "Git Repos",
    ref: "",
  },
  {
    label: "Get in Touch",
    ref: "",
  },
];

const TopBar = () => {
  return (
    <div className="flex justify-between">
      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/20420550?v=4" />
        <AvatarFallback>V</AvatarFallback>
      </Avatar>

      <div className="flex gap-5 ">
        <NavigationMenu className=" hidden w-full md:block md:w-auto">
          <NavigationMenuList>
            {TopbarItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <Link href={item.ref} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <ModeToggle />

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="default">Hello</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {TopbarItems.map((item) => (
                <DropdownMenuItem key={item.label}>
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
