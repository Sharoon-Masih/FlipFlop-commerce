import React from 'react'
import { Button } from './ui/button'
import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter } from "react-icons/sl";
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='h-80 bg-white w-screen  px-4 md:px-0 border-t py-8 shadow-border '>
            <div className='w-[90%] md:w-[80%] 2xl:max-w-[1280px]  flex flex-col justify-between items-center  mx-auto h-full gap-8'>
                <div className=' w-full flex justify-between  items-center lg:items-start flex-col lg:flex-row gap-6'>
                    <div className='flex flex-col items-center justify-between lg:items-start'>
                        <h1 className='text-2xl font-bold '>Find Flip<span className='text-primary'>Flop</span></h1>
                        <p className='text-base font font-medium text-gray-500 antialiased mt-1'>Find a best quality products near you.</p>
                        <Button className='w-72 sm:w-80 text-2xl font font-semibold mt-6'>Store Location</Button>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-2xl font-semibold uppercase text-primary'>follow us</h1>
                        <div className='flex justify-center gap-3 items-center'>
                            <SlSocialInstagram className='w-[20px] h-[20px] text-gray-500 font-medium ' />
                            <SlSocialTwitter className='w-[20px] h-[20px] text-gray-500 font-medium ' />
                            <SlSocialFacebook className='w-[20px] h-[20px] text-gray-500 font-medium ' />
                        </div>
                    </div>
                    <div className='flex flex-col justify-between items-center lg:items-start'>
                        <h1 className='text-2xl font-semibold text-primary uppercase'>Contact Us</h1>
                        <p className='text-base text-gray-500 font-medium antialiased mt-1 text-center lg:text-start'>Feel free to send any query on the email mentioned below!</p>
                        <span className='mt-4 rounded-lg shadow-lg text-lg font-medium p-2 border font-sans '>flipflop@gmail.com</span>
                    </div>
                </div>
                <div className='flex justify-between gap-4 flex-col lg:flex-row items-center lg:gap-6'>
                    <h2 className='text-xl uppercase font-semibold text-gray-500 text-center'>Secure online shopping</h2>
                     <div className='flex justify-center items-center gap-4'>
                        <Image src={"/visa.png"} width={40} height={40} alt='visa'/>
                        <Image src={"/paypal.png"} width={40} height={40} alt='paypal'/>
                        <Image src={"/logo.png"} width={40} height={40} alt='mastercard'/>
                     </div>
                </div>

            </div>

        </div>
    )
}

export default Footer