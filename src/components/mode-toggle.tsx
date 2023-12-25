"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, themes, theme } = useTheme();

  return (
    <Button
      className="bg-transperent border-0 flex items-center gap-1"
      variant="outline"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:hidden" />
      <Moon className="h-[1.2rem] w-0 dark:w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      <p className="hidden lg:block">Toggle theme</p>
    </Button>
  );
}
