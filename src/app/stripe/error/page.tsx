import React from 'react'

const Error = () => {
  return (
    <div className=' height flex mx-auto p-4 flex-col  justify-center items-center text-3xl text-primary '>
        <div className='flex flex-col justify-center gap-2 items-start sm:items-center'>
        <span className='text-gray-900 font-medium '>Something went wrong...</span>
        <span className='font-bold'>Try Again!</span>
        </div>
    </div>
  )
}

export default Error