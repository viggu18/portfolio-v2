import React from "react";
import Link from "next/link";

import { InstagramIcon, Linkedin, GithubIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";
import MobileSidebar from "./mobile-side-bar";
import { ModeToggle } from "./mode-toggle";

const Topbar = () => {
  return (
    <div className={cn("bg-background flex flex-col w-full z-50")}>
      <div className="flex gap-5 justify-between md:justify-end mb-3">
        <div className="flex gap-4 items-center md:hidden">
          <MobileSidebar />
          <ModeToggle />
        </div>
        <div className="flex gap-5 items-center">
          <Link href="https://github.com/viggu18" target="_blank">
            <GithubIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/viggu18/" target="_blank">
            <Linkedin />
          </Link>
          <Link href="https://www.instagram.com/vcn.o_o/" target="_blank">
            <InstagramIcon />
          </Link>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default Topbar;
