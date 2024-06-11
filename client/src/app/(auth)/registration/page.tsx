
"use client"
import React from 'react'
import {isEmail} from 'validator';

function registration() {
  const [formData, setFormData] = React.useState({
    fname:'',
    lname:'',
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
    if (isEmail(formData.email) && formData.password.length > 6) {
      console.log('Form is valid')
    }
    else {
      console.error('Form is invalid')
    }
    e.preventDefault()
    console.log('Form submitted')
  }
  return (
    <div>
      <h1>register</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name={formData.fname} placeholder='first Name' onChange={handleChange} />
        <input type="text" name={formData.lname}  placeholder="last Name"onChange={handleChange} />
        <input type='email' name={formData.email} placeholder='email' onChange={handleChange} />
        <input type='password' name={formData.password} placeholder="password" onChange={handleChange}/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default registration