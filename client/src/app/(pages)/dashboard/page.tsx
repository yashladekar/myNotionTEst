"use client"
import React from 'react'

function page() {
    const[username,setuserName]=React.useState("yash")
  return (
    <div>
        <h1>{username}</h1>
        

    </div>
  )
}

export default page