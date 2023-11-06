import React from "react";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer>
      <Separator />
      <div className="container my-5 flex items-center justify-between">
        <h3 className="font-medium text-2xl">Connect with Me</h3>
        <ul className="flex flex-col md:flex-row gap-5">
          <li>Discord</li>
          <li>GitHub</li>
          <li>LinkedIn</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
      <p className="text-center mb-5">&copy;&nbsp;2022 Jiksi</p>
    </footer>
  );
}
