import Image from "next/image";
import Stack from "./components/Stack";
import Panel from "./components/Panel";

export default function Home() {
  const arr: number[] = [9, 0, 12, 3, 4, 101];
  return (
    <div className="flex justify-center items-center flex-col">
      <Stack arr={arr}></Stack>
      <Panel></Panel>
    </div>
  );
}
