"use client";

import React from "react";
import Image from "next/image";
import jiksi from "/public/images/jiksi.png";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <section className="min-h-main flex flex-col justify-center container">
      <div className="flex flex-col md:flex-row items-center gap-y-5 justify-around">
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-extrabold text-2xl md:text-4xl">Hello World!</h2>
          <h2 className="font-extrabold text-3xl md:text-5xl">
            You can call me&nbsp;
            <span className="text-primary-foreground bg-primary rounded-md pl-4 pr-5">
              Jiksi
            </span>
          </h2>
          <div className="font-medium text-lg md:text-2xl mt-3 md:mt-5 text-muted-foreground">
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
            className="md:w-[400px] w-[200px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
