import React from 'react'
import { useParams } from 'react-router'

export default function Profiles() {

    const params = useParams()
    console.log(params)
     
  return (
    <div>
        <h1>Votre profile</h1>
    </div>
  )
}
