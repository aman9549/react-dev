// UseState
import { useState, useContext } from "react";
import { Phone } from "../main";

const Hook1 = () => {
  const [count, setCount] = useState(0);

  const result = useContext(Phone);

  function inc() {
    if (count < 20) {
      setCount(count + 1);
    }
  }

  function dec() {
    setCount(count - 1);
  }

  return (
    <>
      <div className=" bg-gray-800 flex justify-center  items-center">
        <div className=" text-center space-y-8 px-28 rounded-2xl py-12">
          <h1 className="text-4xl">Count = {result}</h1>
          <div className="flex space-x-4 justify-center">
            <button
              onClick={inc}
              className="bg-green-600 hover:bg-green-500 font-bold text-xl px-7 py-2"
            >
              Inc +{" "}
            </button>
            <button
              onClick={dec}
              className="bg-red-600 hover:bg-red-500 font-bold text-xl px-7 py-2"
            >
              Dec -{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hook1;
