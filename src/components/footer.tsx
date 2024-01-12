import React from "react";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer>
      <Separator />
      <div className="container my-5 flex flex-col items-center justify-between gap-y-5 md:flex-row">
        <h3 className="text-2xl font-medium">Connect with Me</h3>
        <ul className="flex flex-row gap-5">
          <li>
            <Link
              href="https://github.com/jiksi"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/zhicxi-azis-72ab5a222"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/jiksilalapo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/Jiksilalapo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </Link>
          </li>
        </ul>
      </div>
      <p className="mb-5 text-center">
        &copy;&nbsp;Jiksi {new Date().getFullYear()}
      </p>
    </footer>
  );
}
