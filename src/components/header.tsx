"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/theme-switcher";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  return (
    <motion.header
      className="sticky top-0 bg-background text-foreground"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container flex h-20 items-center justify-between text-base md:text-xl">
        <Link href="/">
          <div className="flex items-center">
            <Avatar className="mr-4 h-9 w-9">
              <AvatarImage src="svg/logo.svg" alt="Jiksi Logo" />
            </Avatar>
            <h1 className="font-bold">JIKSI</h1>
          </div>
        </Link>
        <div className="flex items-center gap-4 font-medium md:gap-10">
          <div>
            <Link href="/#project">Project</Link>
          </div>
          <div>
            <Link href="/#about">About</Link>
          </div>
          <div>
            <Link href="/#contact">Contact</Link>
          </div>
          <ModeToggle />
        </div>
      </nav>
      <Separator />
    </motion.header>
  );
}
