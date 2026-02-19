"use client";

import Button from "@/components/atoms/Button";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="flex items-center justify-between p-4 bg-blue-500 border-b border-neutral-900 dark:border-neutral-600 ">
      <h2 className="text-xl font-bold">App Gallery</h2>
      <Button
        className="px-4 py-2 bg-blue-500 dark:bg-blue-400 text-white rounded"
        onClick={toggleTheme}
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </Button>
    </header>
  );
}
