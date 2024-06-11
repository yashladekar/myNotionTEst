"use client"
import React from 'react'
import axios from 'axios'
import {isEmail} from 'validator';   

function Login() {
  
  const[formData,setFormData] = React.useState({
    email: '',
    password: ''
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if(isEmail(formData.email) && formData.password.length > 6){
      console.log('Form is valid')
    }
    else{
      console.error('Form is invalid')
    }
    e.preventDefault()
    console.log('Form submitted')
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type='email' name={formData.email} onChange={handleChange} ></input>
        <input type='password' name={formData.password} onChange={handleChange}></input>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
export default Login
