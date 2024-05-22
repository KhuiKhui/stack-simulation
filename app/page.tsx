"use client";

import Image from "next/image";
import Stack from "./components/Stack";
import Panel from "./components/Panel";
import { useState } from "react";
import Config from "./components/Config";

export default function Home() {
  const [arr, setArr] = useState([9, 0, 12, 3, 4, 76]);
  const [stackType, setStackType] = useState(0);
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-[750px] flex flex-row ml-[30%] items-end">
        <Stack arr={arr} setArr={setArr} stackType={stackType}></Stack>
        <Config
          arr={arr}
          stackType={stackType}
          setArr={setArr}
          setStackType={setStackType}
        ></Config>
      </div>
      <Panel stackType={stackType} setStackType={setStackType}></Panel>
    </div>
  );
}
