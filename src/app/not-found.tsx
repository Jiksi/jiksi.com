"use client";

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import head from "/public/svg/head.svg";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <main>
      <section className="min-h-main flex flex-col items-center justify-center gap-5">
        <div className="flex items-center justify-center text-9xl font-extrabold">
          <h1>4</h1>
          <Image src={head} alt="404" className="h-32 w-32" />
          <h1>4</h1>
        </div>
        <p className="container w-full text-center text-xl font-medium md:w-1/2 md:text-2xl">
          The page you are looking for doesn&apos;t exist or has been moved.
          Please go back to the homepage.
        </p>
        <Button asChild>
          <Link href="/">Go back to home</Link>
        </Button>
      </section>
    </main>
  );
}
