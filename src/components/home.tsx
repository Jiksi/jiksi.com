"use client";

import React from "react";
import Image from "next/image";
import jiksi from "/public/img/jiksi.png";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <section className="min-h-main flex flex-col justify-center container">
      <div className="flex justify-around">
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-extrabold text-4xl">Hello World!</h2>
          <h2 className="font-extrabold text-5xl">
            You can call me&nbsp;
            <span className="text-primary-foreground bg-primary rounded-md px-5">
              Jiksi
            </span>
          </h2>
          <div className="font-medium text-2xl mt-5 text-muted-foreground">
            <p>Building awesome website with React,</p>
            <p>Typescript, and Framer Motion</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image src={jiksi} alt="jiksi" height={400} width={400} />
        </motion.div>
      </div>
    </section>
  );
}
