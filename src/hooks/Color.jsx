import React, { useState } from 'react'
import Button from '../utility/Button'

export const Color = () => {


const [color , setColor] = useState("white");

  return (
    <>
    <section className={`h-screen bg-${color}-500 flex justify-center items-end p-10`}>


      <div className="flex gap-10">
        <Button name={"red"} onClick={()=> setColor("red")} />
        <Button name={"blue"} onClick={()=> setColor("c")} />
        <Button name={"green"} />
        <Button name={"white"} />
        <Button name={"yellow"} />
        <Button name={"black"} /> 
      </div>

    </section>
   
    </>
  )
}
