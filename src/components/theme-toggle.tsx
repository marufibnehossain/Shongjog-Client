"use client";

import { Moon, Sun } from "lucide-react";
import { TbSunHighFilled } from "react-icons/tb";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="bg-herobg border border-dashed border-stroke"
    >
      <BsFillMoonFill className="size-5 dark:hidden" />
      <TbSunHighFilled className="hidden size-5 dark:block" />
    </Button>
  );
}