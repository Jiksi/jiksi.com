"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import jiksi from "/public/images/jiksi.png";

export default function Home() {
  return (
    <section
      className="min-h-main container flex flex-col justify-center"
      id="home"
    >
      <div className="flex flex-col items-center justify-around gap-y-5 md:flex-row">
        <motion.div
          className="order-last flex flex-col justify-center md:order-first"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-extrabold md:text-4xl">Hello World!</h2>
          <h2 className="text-3xl font-extrabold md:text-5xl">
            You can call me&nbsp;
            <span className="rounded-md bg-primary pl-4 pr-5 text-primary-foreground">
              Jiksi
            </span>
          </h2>
          <div className="mt-3 text-lg font-medium text-muted-foreground md:mt-5 md:text-2xl">
            <p>Building awesome website with React,</p>
            <p>Typescript, Tailwind CSS, and Framer Motion</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={jiksi}
            alt="Jiksi Open Peep Ver."
            height={400}
            width={400}
            className="w-[200px] md:w-[400px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
