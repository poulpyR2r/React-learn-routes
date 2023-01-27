import React from 'react'
import { useLocation } from 'react-router'

export default function Marketing() {

  const location = useLocation()
  console.log(location)
  


  return (
    <div>
       <h1>Marketing</h1>
    </div>
  )
}
