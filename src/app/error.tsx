"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <section className="min-h-main flex flex-col items-center justify-center gap-5 md:gap-10">
        <h1 className="text-3xl font-extrabold md:text-5xl">
          Something went wrong!
        </h1>
        <Button onClick={reset}>Try again</Button>
      </section>
    </main>
  );
}
