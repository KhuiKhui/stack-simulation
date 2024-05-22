export default function Config(props: {
  arr: number[];
  stackType: number;
  setArr: Function;
  setStackType: Function;
}) {
  let copy: number[] = [...props.arr];
  function pushArr(): void {
    if (copy.length < 6) {
      copy.push(Math.round(Math.random() * 100));
      props.setArr(copy);
      if (props.stackType != 0) {
        document.getElementById(`${props.stackType}`)!.style.backgroundColor =
          "white";
      }
      props.setStackType(0);
    }
  }
  function popTop(): void {
    copy.pop();
    props.setArr(copy);
    if (props.stackType != 0) {
      document.getElementById(`${props.stackType}`)!.style.backgroundColor =
        "white";
    }
    props.setStackType(0);
  }
  function popBot(): void {
    copy.shift();
    props.setArr(copy);
    if (props.stackType != 0) {
      document.getElementById(`${props.stackType}`)!.style.backgroundColor =
        "white";
    }
    props.setStackType(0);
  }

  function clearArr(): void {
    copy = [];
    props.setArr([]);
    if (props.stackType != 0) {
      document.getElementById(`${props.stackType}`)!.style.backgroundColor =
        "white";
    }
    props.setStackType(0);
  }

  return (
    <div className="flex flex-col items-center mb-[2.3%] ml-[10%] w-[20%] h-[40%] bg-[#BFCACD] border-2 border-black">
      <b className="mt-[10px]">configure</b>
      <div className="flex flex-col justify-center items-center mt-[10px]">
        <button
          className="bt w-[75px] md:w-[125px]"
          id="1a"
          onClick={(e) => pushArr()}
        >
          push
        </button>
        <button
          className="bt w-[75px] md:w-[125px]"
          id="3a"
          onClick={(e) => popTop()}
        >
          pop top
        </button>
        <button
          className="bt w-[75px] md:w-[125px]"
          id="2a"
          onClick={(e) => popBot()}
        >
          pop bottom
        </button>

        <button
          className="bt w-[75px] md:w-[125px]"
          id="4a"
          onClick={(e) => clearArr()}
        >
          clear
        </button>
      </div>
    </div>
  );
}
