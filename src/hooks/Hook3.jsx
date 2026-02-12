// ---- useReducer ------

import { useReducer } from "react"
import Button from "../utility/Button";

const Hook3 = () => {

  const initialState = 0;
  
  const reducer = (state , action) =>{

    switch(action.type){

        case "inc" :
          return state + 1;
        case "dec" :
          return state - 1; 
        case "reset" :
          return 0; 

    }

  }

  const [number , dispatch] = useReducer(reducer , initialState);

  return (
    <>
    <Button name={"Increment"} onClick={()=> dispatch({type:"inc"})}  />

    <h1 className="text-5xl text-white">Number {number}</h1>

    <Button name={"Decrement"}  onClick={()=> dispatch({type:"dec"})}  />
    <Button name={"Decrement"}  onClick={()=> dispatch({type:"reset"})}  />

    </>
  )
}

export default Hook3