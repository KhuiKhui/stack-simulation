export default function Config(props: { arr: number[]; setArr: Function }) {
  let copy: number[] = [...props.arr];
  function pushArr(e): void {
    if (copy.length < 6) {
      copy.push(Math.round(Math.random() * 100));
      console.log(copy);
      props.setArr(copy);
    }
  }
  function popTop(e): void {
    copy.pop();
    console.log(copy);
    props.setArr(copy);
  }
  function popBot(e): void {
    copy.shift();
    console.log(copy);
    props.setArr(copy);
  }

  function clearArr(e): void {
    copy = [];
    props.setArr([]);
  }
  return (
    <div className="flex flex-col items-center mb-[2.3%] ml-[10%] w-[20%] h-[40%] bg-[#BFCACD] border-2 border-black">
      <b className="mt-[10px]">Configure</b>
      <div className="flex flex-col justify-center items-center mt-[10px]">
        <button className="bt w-[125px]" id="1a" onClick={(e) => pushArr(e)}>
          Push
        </button>
        <button className="bt w-[125px]" id="3a" onClick={(e) => popTop(e)}>
          Pop top
        </button>
        <button className="bt w-[125px]" id="2a" onClick={(e) => popBot(e)}>
          Pop bottom
        </button>

        <button className="bt w-[125px]" id="4a" onClick={(e) => clearArr(e)}>
          Clear
        </button>
      </div>
    </div>
  );
}
