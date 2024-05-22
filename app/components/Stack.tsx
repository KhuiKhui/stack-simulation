import { useEffect, useState } from "react";

export default function Stack(props: {
  arr: number[];
  setArr: Function;
  stackType: number;
}) {
  let stack: number[] = [];
  let copy: number[] = [...props.arr];
  const [arrCopy, setCopy] = useState([...props.arr]);
  function formatArr(arr: any): string {
    if (arr.length == 0) {
      return "[]";
    }
    let formatted: string = "[";
    for (let i = 0; i < arr.length; i++) {
      formatted += arr[i] + ", ";
    }
    return formatted.substring(0, formatted.length - 2) + "]";
  }

  const mode = useEffect(() => {
    if (props.stackType == 1) {
      for (let i: number = 0; i < copy.length; i++) {
        while (stack.length != 0 && copy[i] <= stack[stack.length - 1]) {
          stack.pop();
        }
        stack.push(copy[i]);
      }

      props.setArr(stack);
    }
    if (props.stackType == 2) {
      for (let i: number = 0; i < copy.length; i++) {
        while (stack.length > 0 && copy[i] >= stack[stack.length - 1]) {
          stack.pop();
        }
        stack.push(copy[i]);
      }

      props.setArr(stack);
    }
    setCopy([...props.arr]);
    stack = [];
  }, [props.stackType]);

  function chooseCopy(): number[] {
    if (props.stackType != 0) {
      return arrCopy;
    }
    return props.arr;
  }
  return (
    <>
      <div className="flex justify-center items-center cursor-default flex-col w-[200px] md:w-[300px]">
        <br></br>
        <div>
          <b>array given:</b> {formatArr(chooseCopy())}
        </div>
        <div>
          <b>array after: </b>
          {props.stackType != 0 ? `${formatArr(props.arr)}` : `null`}
        </div>

        <br></br>
        <br></br>
        <div className="flex justify-end items-center flex-col border-2 border-[#000000] w-[250px] h-[300px] bg-[whitesmoke]">
          <b className="mt-[10px] grow">stack</b>
          <div className="">
            {props.arr.map((ele: number, index: number) => {
              return (
                <>
                  <div
                    className={`flex flex-row items-center ${
                      props.arr.length - index - 1 == 0
                        ? "bg-[#AECDE0]"
                        : "bg-[#BFCACD]"
                    }
                ${
                  props.arr.length - index - 1 == props.arr.length - 1
                    ? "bg-[#FFE660]"
                    : "bg-[#BFCACD]"
                } w-40 m-[4px] p-0.5 text-center hover:scale-[1.1] border-2 border-black`}
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
          <br></br>
        </div>
      </div>
    </>
  );
}
