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
    <div className="flex justify-center items-center flex-col cursor-default text-sm md:text-base">
      <b className="p-[5px] bg-[#F6F2C2] text-center border-2 border-black border-t-0">
        stack simulator
      </b>
      <div className="w-[500px] md:w-[750px] flex flex-row items-end justify-end">
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
