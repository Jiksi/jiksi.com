import React from "react";
import { ModeToggle } from "@/components/theme-switcher";
import { Separator } from "./ui/separator";
import { Avatar, AvatarImage } from "./ui/avatar";

export default function Header() {
  return (
    <header className="sticky top-0 bg-background text-foreground">
      <nav className="flex items-center container justify-between h-20 text-base md:text-xl">
        <div className="flex items-center">
          <Avatar className="h-9 w-9 mr-4">
            <AvatarImage src="images/logo.png" alt="Jiksi Logo" />
          </Avatar>
          <h1 className="font-bold">JIKSI</h1>
        </div>
        <ul className="flex items-center gap-4 md:gap-10 font-medium">
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
