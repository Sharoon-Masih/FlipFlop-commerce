import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='height flex justify-center items-center'>
        <SignIn path='/sign-in'/>
    </div>
  )
}

export default SignInPage