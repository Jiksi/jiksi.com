import Image from "next/image";
import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiPrisma,
} from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function About() {
  const techStack = [
    {
      name: "React",
      icon: <SiReact className="h-10 w-10" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="h-10 w-10" />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript className="h-10 w-10" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="h-10 w-10" />,
    },
    {
      name: "Framer Motion",
      icon: <SiFramer className="h-10 w-10" />,
    },
    {
      name: "Prisma",
      icon: <SiPrisma className="h-10 w-10" />,
    },
  ];

  return (
    <section className="container mb-20 md:mb-40" id="about">
      <h3 className="mb-5 text-2xl font-bold underline underline-offset-4">
        About
      </h3>
      <div className="flex flex-col items-center justify-between gap-y-5 md:flex-row md:items-start">
        <div className="order-last w-full space-y-5 text-lg leading-loose md:order-first md:w-1/2 md:space-y-10 md:text-xl">
          <p>
            H! My name is Zhicxi Azis Pramana, but you can call me Jiksi.
            I&apos;m a programmer with expertise in crafting awesome website
            using React, Typescript, Tailwind CSS, and Framer Motion. With years
            of experience under my belt, I&apos;ve honed my skills in creating
            engaging and responsive user interfaces.
          </p>
          <p>
            I firmly believe that web technology is a powerful medium to
            transform how we interact with the world, and I&apos;m committed to
            learn as much as possible. I&apos;m always eager to take on new
            challenges and continuously evolve my skills to make a maximum
            impact on every project.
          </p>
          <div>
            <h4 className="mb-2 text-2xl font-bold md:mb-4">Tech Stack</h4>
            <ul className="flex gap-5">
              {techStack.map((tech, index) => (
                <li key={index}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>{tech.icon}</TooltipTrigger>
                      <TooltipContent>
                        <p>{tech.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative -z-10 flex aspect-[4/3] h-[400px] w-[300px] items-center justify-center overflow-hidden rounded-2xl bg-primary md:mr-20">
          <Image
            src="/images/zhicxi.png"
            alt="profile"
            fill
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
