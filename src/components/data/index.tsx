import {
  Briefcase,
  FolderGit,
  Phone,
  Presentation,
  UserRoundCog,
} from "lucide-react";

export const SidebarItems = [
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
    ref: "#project",
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
