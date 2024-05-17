import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className='flex height justify-center items-center'><SignUp path='/sign-up'/></div>
  )
}

export default SignUpPage