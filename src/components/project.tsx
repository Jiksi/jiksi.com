"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Projects = [
  {
    title: "Siplah Terpadu",
    image:
      "bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1)),url('/images/projects/siplah-terpadu.png')]",
    badge: ["nextjs", "nextauth", "prisma"],
    content:
      "A website for DLH PPU designed to enhance public services for the residents, streamlining and improving overall service delivery.",
    link: "https://siplahterpadu.id",
  },
  {
    title: "Meranti Creative Lab",
    image:
      "bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1)),url('/images/projects/mcl.png')]",
    badge: ["nextjs", "framer motion", "mysql"],
    content:
      "A website for Meranti Creative Lab Nusantara to showcase their works.",
    link: "https://mcl.vercel.app",
  },
  {
    title: "Personal Portofolio Website",
    image:
      "bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1)),url('/images/projects/jiksi.png')]",
    badge: ["nextjs"],
    content: "My personal portfolio website.",
    link: "https://jiksi.com",
  },
];

export default function Project() {
  return (
    <section className="container mb-20 md:mb-40" id="project">
      <motion.h3
        className="mb-5 text-2xl font-bold underline underline-offset-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        Project
      </motion.h3>
      <ul className="grid grid-cols-1 gap-5 overflow-y-hidden md:grid-cols-2">
        {Projects.map((project, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Card className="overflow-hidden">
              <CardHeader
                className={cn(
                  "h-64 justify-end bg-cover bg-top bg-no-repeat pb-3",
                  project.image,
                )}
              >
                <CardTitle className="text-card-title">
                  {project.title}
                </CardTitle>
                <ul className="flex gap-1">
                  {project.badge.map((badge, index) => (
                    <li key={index}>
                      <Badge
                        variant="outline"
                        className="border-card-title text-card-title"
                      >
                        {badge}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardHeader>
              <CardContent className="h-32 pt-3 lg:h-24">
                <p>{project.content}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:cursor-pointer hover:underline"
                >
                  See website
                </Link>
              </CardFooter>
            </Card>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
