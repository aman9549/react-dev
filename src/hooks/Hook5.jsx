import React, { useEffect, useState } from 'react'
import Wrapper from '../components/Wrapper'
import { useRef } from 'react'

const Hook5 = () => {

    const [inputValue , setInputValue] = useState("")

    const count = useRef(0);
    // console.log(count);

    useEffect(()=>{
        count.current = count.current + 1;
    })
    

  return (
    <>
    <Wrapper bg={"bg-amber-600"}>
      
      <h1>Type here somthing</h1>
      <input type="text" className='border rounded-4xl p-2' onChange={(e)=> setInputValue(e.target.value)} value={inputValue} name="" id="" />
      <h1>Renders = {count.current}</h1>
    </Wrapper>
    </>
  )
}

export default Hook5