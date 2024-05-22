"use client";

import Image from "next/image";
import Stack from "./components/Stack";
import Panel from "./components/Panel";
import { useState } from "react";

export default function Home() {
  const arr: number[] = [9, 0, 12, 3, 4, 101];
  const [stackType, setStackType] = useState(0);
  return (
    <div className="flex justify-center items-center flex-col">
      <Stack arr={arr}></Stack>
      <Panel stackType={stackType} setStackType={setStackType}></Panel>
    </div>
  );
}
