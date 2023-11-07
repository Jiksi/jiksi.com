import React from "react";
import Link from "next/link";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/theme-switcher";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  return (
    <header className="sticky top-0 bg-background text-foreground">
      <nav className="container flex h-20 items-center justify-between text-base md:text-xl">
        <Link href="/">
          <div className="flex items-center">
            <Avatar className="mr-4 h-9 w-9">
              <AvatarImage src="svg/logo.svg" alt="Jiksi Logo" />
            </Avatar>
            <h1 className="font-bold">JIKSI</h1>
          </div>
        </Link>
        <ul className="flex items-center gap-4 font-medium md:gap-10">
          <li>
            <Link href="/#project">Project</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
          <ModeToggle />
        </ul>
      </nav>
      <Separator />
    </header>
  );
}
