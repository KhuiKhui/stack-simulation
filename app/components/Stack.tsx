export default function Stack(props: { arr: number[] }) {
  return (
    <div className="flex justify-center items-center cursor-default flex-col">
      <div>stack simulator</div>
      <br></br>
      <div>array given: [9, 0, 12, 3, 4, 101]</div>
      <br></br>
      <br></br>
      <div className="flex justify-center items-center cursor-default flex-col">
        {props.arr.map((ele: number, index: number) => {
          return (
            <div className="bg-[#BFCACD] w-40 m-0.5 p-0.5 text-center hover:scale-[1.1]">
              {ele}
            </div>
          );
        })}
      </div>
    </div>
  );
}
