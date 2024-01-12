"use client";

import * as React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function ModeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      aria-label="Switch button"
      size="icon"
      className="overflow-hidden rounded-full"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="light"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              rotate: [30, -30, 30],
              transition: { duration: 0.9, repeat: Infinity },
            }}
          >
            <BsFillSunFill className="h-5 w-5" />
          </motion.div>
        ) : (
          <motion.div
            key="dark"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              rotate: [30, -30, 30],
              transition: { duration: 0.9, repeat: Infinity },
            }}
          >
            <BsFillMoonFill className="h-5 w-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
}
