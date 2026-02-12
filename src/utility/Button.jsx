import React from 'react'

const Button = ({onClick , name}) => {
  return (
    <>
    <button onClick={onClick} className='bg-cyan-800 text-white font-bold px-4 py-2 rounded-xl'>{name}</button>
    </>
  )
}

export default Button