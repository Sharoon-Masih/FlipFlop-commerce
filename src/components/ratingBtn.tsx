'use client'
import React, { useEffect, useState } from 'react'

import { Button } from './ui/button'
import { HiStar, HiOutlineStar } from "react-icons/hi2"


const RatingBtn = () => {
    const [rate, Setrate] = useState<string>("1.1")
    const [rating, Setrating] = useState<number>(5);
    const [isClick, SetisClick] = useState(false);
    useEffect(() => {
        const final = (Math.random() * (5 - 1) + 1).toString().slice(0, 3)
        Setrate(final)
    }, [])

    useEffect(() => {
        console.log(rate);

        if (rate.length > 3) {
            Setrate((prev) => (+prev + 0.1).toString().slice(0, 3))
            console.log(">3");

            return
        }

    }, [rate])

    useEffect(() => {
        const final = Math.ceil(Math.random() * (100 - 5) + 1)
        Setrating(final)
    }, [])

    function handleRating() {
        if (!isClick) {

            if (+rate >= 5) {
                Setrate(rate)
                Setrating(rating)
                return
            }

            Setrate((prev) => (+prev + 0.1).toString())
            Setrating((prev) => prev + 1)
            console.log("< 3");
            return
        }
        Setrate((prev) => (+prev - 0.1).toString())
        Setrating((prev) => prev - 1)

        //    const check= +rate === +rate + 0.1
        //    if(check){
        //     Setrate(rate)
        //     return
        //    }
        // Setrate((prev) => (+prev === +prev + 0.1) ? prev : (+prev + 0.1).toString())
    }

    return (

        <div className='flex justify-center items-center gap-3 pt-3 '>

            <Button onClick={() => {
                handleRating()
                SetisClick((prev) => !prev)
            }} className='flex items-center justify-center gap-2 rounded-3xl text-white p-3 text-base overflow-hidden w-[80px] transition duration-1000'>
                <span>{rate}</span>
                {isClick ? <HiStar className='text-lg' /> : <HiOutlineStar className='text-lg' />}
            </Button>

            <p className='text-sm text-gray-500 font-medium antialiased'>{rating} Ratings</p>
        </div>

    )
}

export default RatingBtn