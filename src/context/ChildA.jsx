import React from 'react'
import ChildB from './ChildB'

const ChildA = ({message}) => {
  return (
    <ChildB message={message} />
  )
}

export default ChildA