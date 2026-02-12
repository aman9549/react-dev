import React from 'react'

const Wrapper = ({children , bg}) => {
  return (
    <>
    <div className={`h-screen ${bg} flex  justify-center  items-center`}>
        <div className="text-center text-6xl text-white space-y-8 px-28 rounded-2xl py-12">
        {children}
        </div>
    </div>
    </>
  )
}

export default Wrapper