"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  const handleButton = () => {
    console.log("Hello World!");
  };

  return (
    <div>
      <main className="h-screen flex justify-center items-center">
        <Button size={"lg"} className={"cursor-pointer"} onClick={handleButton}>
          Click me
        </Button>
      </main>
    </div>
  );
}
