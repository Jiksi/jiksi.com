"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="container mb-10 md:mb-20" id="contact">
      <motion.h3
        className="mb-5 text-2xl font-bold underline underline-offset-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        Contact
      </motion.h3>
      <motion.div
        className="w-full text-justify text-lg leading-loose md:w-3/5 md:text-xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <p>
          If you&apos;re interested in collaborating, have any questions, or
          just want to discuss exciting projects, feel free to get in touch with
          me. I&apos;m always happy to communicate and connect with new friends.
        </p>
        <p>(find my contact in the footer)</p>
      </motion.div>
    </section>
  );
}
