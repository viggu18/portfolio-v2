import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProfileIcon from "./profile-icon";
import { Button } from "./ui/button";
import { SidebarItems } from "./data";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>
          <ProfileIcon />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="max-w-[60%]">
        <SheetHeader>
          <SheetTitle>Exploring sections ?</SheetTitle>
          <SheetDescription>Checkout the list</SheetDescription>
        </SheetHeader>
        <div className="flex justify-between items-center flex-col h-full py-8">
          <div className="flex gap-5 flex-col">
            {SidebarItems.map((item) => (
              <SheetTrigger asChild key={item.label}>
                <Link href={item.ref} scroll passHref>
                  <Button
                    className="bg-transperent border-0 w-full justify-start items-center"
                    variant="outline"
                    size="icon"
                  >
                    <div className="flex gap-4 m-3 justify-center items-center">
                      {item.icon}
                      <p>{item.label}</p>
                    </div>
                  </Button>
                </Link>
              </SheetTrigger>
            ))}
          </div>

          <div className="fixed bottom-4 flex flex-col items-center gap-2 w-fit">
            <Separator />
            <Link href="https://viggu18.vercel.app/">
              <Button
                className="bg-transperent border-0 w-full"
                variant="outline"
              >
                <LogOut className="mr-3" />
                <p>View Protfolio V1</p>
              </Button>
            </Link>
            <Separator />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
