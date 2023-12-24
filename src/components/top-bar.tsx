import React, { Fragment } from "react";
import { InstagramIcon, Linkedin, GithubIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="sticky top-0 bg-background">
      <div className="flex gap-5 justify-end mt-2 mb-3">
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
      <Separator />
    </div>
  );
};

export default Topbar;
