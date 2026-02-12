import { useState, useEffect , useContext } from "react";
import Button from "../utility/Button";
import { FaShoppingCart } from "react-icons/fa";
import { Phone } from "../main";


// useEffect
const Hook2 = () => {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);
  const result = useContext(Phone);

  // 1.) Ek baar hi chalta hai.

  useEffect(() => {
    console.log("Ek baar chalega");
  },[]);

   // 2.) Jab component update hoga tab chalega

  useEffect(() => {
    console.log("Update per har baar chalega");
  });

  // 2.) Jab dependency change hogi tab chalega

  useEffect(() => {
    console.log("After dependency Change");
  },[num]);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl text-white">count {result}</h1>
      <Button name={"Count"} onClick={() => setCount(count + 1)} />

      <h1 className="text-4xl text-white">num {num}</h1>
      <Button name={"num"} onClick={()=> setNum(num + 1)} />

        <h1><FaShoppingCart className="text-white" /></h1>
    </div>
  );
};

export default Hook2;
