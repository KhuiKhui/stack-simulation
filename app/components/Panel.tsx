export default function Panel() {
  return (
    <div className="flex flex-col items-center mt-[50px] w-[40%] h-[200px] bg-[#BFCACD]">
      <b className="mt-[10px]">Stack Control Panel</b>

      <div className="flex flex-row justify-center items-center mt-[80px]">
        <button className="bt">Increasing Monotonic Stack</button>
        <button className="bt">Decreasing Monotonic Stack</button>
        <button className="bt">Queue</button>
      </div>
    </div>
  );
}
