"use client"
import React from 'react'
function ForgotPassword() {
  const[isValid,setIsValid]=React.useState(true)
  const[otp,setOtp]=React.useState("");
  const[email,setEmail]=React.useState("");
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement> )=>{
    setEmail(e.target.value)
  }
  const handleOtp=(e: React.ChangeEvent<HTMLInputElement> )=>{
    setOtp(e.target.value)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement> )=>{
    e.preventDefault()
    if(email){
      setIsValid(!isValid)
    }
  } 
  return (

    <div>{isValid ? <div>
      <h1>Forgot Password</h1>
      <p>Enter your email address and we will send you a link to reset your password</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input onChange={handleEmail} type="email" required />
        </div>
        <button>Send</button>
      </form>
    </div> : 
    <div>
      <h1>Reset Password</h1>
      <p>Enter the OTP sent to your email address</p>
      <form>
        <div>
          <label>OTP</label>
          <input type="text" required />
        </div>
        <div>
          <label>New Password</label>
          <input type="password" required />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" required />
        </div>
        <button>Reset</button>
      </form>
    </div>
    }</div>
      
      
  )
}

export default ForgotPassword