import React from "react";
import { ModeToggle } from "@/components/theme-switcher";
import { Separator } from "./ui/separator";

export default function Header() {
  return (
    <header className="sticky top-0 bg-background text-foreground">
      <nav className="flex items-center container justify-between h-20 text-xl">
        <h1 className="font-bold">JIKSI</h1>
        <ul className="flex items-center gap-10 font-medium">
          <li>Project</li>
          <li>About</li>
          <li>Contact</li>
          <ModeToggle />
        </ul>
      </nav>
      <Separator />
    </header>
  );
}
