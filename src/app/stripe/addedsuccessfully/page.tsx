import { Button } from '@/components/ui/button'
import { ArrowBigRightDash, CheckCheck } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const PaymentDone = () => {
  return (
    <div className='flex height justify-center items-center'>
    <div className='flex flex-col justify-center items-center gap-6'>
    <span className='text-primary '><CheckCheck className='w-16 h-16'/></span>
    <h1 className='text-3xl text-gray-900 font-semibold'>Payment Done!</h1>
    <p className='text-lg text-gray-500 font-medium antialiased'>Thank you for your purchase hope you enjoy it !</p>
    <Link href={"/"}><Button className='text-2xl px-5 py-7 flex justify-center items-center gap-2 font-medium '>Continue Shopping <ArrowBigRightDash/></Button></Link>
    </div>
    </div>
  )
}

export default PaymentDone