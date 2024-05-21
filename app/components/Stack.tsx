export default function Stack(props: { arr: number[] }) {
  return (
    <div className="flex justify-center items-center cursor-default flex-col">
      <div className="w-[200px] p-[5px] bg-[#F6F2C2] text-center border-2 border-black border-t-0">
        stack simulator
      </div>
      <br></br>
      <div>array given: [9, 0, 12, 3, 4, 101]</div>
      <br></br>
      <br></br>
      <div className="flex items-center cursor-default flex-col border-2 border-[#000000] w-[250px] h-[300px] bg-[whitesmoke]">
        <b className="mt-[5px] mb-[15px]">Stack</b>

        {props.arr.map((ele: number, index: number) => {
          return (
            <>
              <div
                className={`flex flex-row items-center ${
                  props.arr.length - index - 1 == 0
                    ? "bg-[#92B6F0]"
                    : "bg-[#BFCACD]"
                }
                ${
                  props.arr.length - index - 1 == props.arr.length - 1
                    ? "bg-[#FFE660]"
                    : "bg-[#BFCACD]"
                } w-40 m-0.5 p-0.5 text-center hover:scale-[1.1] border-2 border-black`}
              >
                <div className="bg-[#FFFFFF] w-[20px] text-center border-2">
                  {props.arr.length - index - 1}
                </div>
                <div className="w-[138px] text-center">
                  {props.arr[props.arr.length - index - 1]}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
