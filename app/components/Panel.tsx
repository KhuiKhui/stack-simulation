import { useEffect } from "react";

export default function Panel(props: {
  stackType: number;
  setStackType: Function;
}) {
  function handleClick(e: any): void {
    if (props.stackType != e.target.id) {
      e.target.style.backgroundColor = "antiquewhite";
      if (props.stackType != 0) {
        document.getElementById(`${props.stackType}`)!.style.backgroundColor =
          "white";
      }

      props.setStackType(e.target.id);
    } else {
      e.target.style.backgroundColor = "white";

      props.setStackType(0);
    }
  }

  return (
    <div className="flex flex-col items-center mt-[50px] w-[300px] sm:w-[450px] md:w-[600px] h-[150px] bg-[#BFCACD] border-2 border-black">
      <b className="mt-[10px]">stack control panel</b>

      <div className="flex flex-row justify-center items-center mt-[30px]">
        <button className="bt" id="1" onClick={(e) => handleClick(e)}>
          increasing monotonic stack
        </button>
        <button className="bt" id="2" onClick={(e) => handleClick(e)}>
          decreasing monotonic stack
        </button>
      </div>
    </div>
  );
}
