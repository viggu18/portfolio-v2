import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileIcon = () => {
  return (
    <Avatar className="mx-auto">
      <AvatarImage src="https://avatars.githubusercontent.com/u/20420550?v=4" />
      <AvatarFallback>VCN</AvatarFallback>
    </Avatar>
  );
};

export default ProfileIcon;
