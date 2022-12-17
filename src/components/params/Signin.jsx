import React from 'react'
import { useParams } from 'react-router-dom'

const Signin = () => {
  let { name } = useParams();
  return (
    <div className='text-center text-capitalize'>Hello {name}</div>
  )
}

export default Signin