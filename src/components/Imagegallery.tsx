"use client"
import { SimplifiedProduct } from '@/lib/interfaces'
import Image from 'next/image'
import React, { useState } from 'react'
import { urlForImage } from '../../sanity/lib/image'
import clsx from 'clsx'


interface Iprop {
    images: {
        _type: string,
        _key: string,
        asset: {
            _ref: string,
            _type: string
        }
    }[]
}
const Imagegallery = ({ images,sale,saleStatus }: {
    images: {
        _type: string,
        _key: string,
        asset: {
            _ref: string,
            _type: string
        }
    }[]
,sale:string,saleStatus:boolean}) => {
    const [productImg,SetproductImg]=useState(images[0])
    // console.log(images);
    return (
        // <div className='grid gap-4 lg:grid-cols-5'>
        //     <div className='order-last lg:order-none flex gap-4 lg:flex-col '>
        //         {images.map((img, index) => {

        //              const {images}=img
        //             return (<div className='overflow-hidden rounded-lg bg-gray-100'>
        //                 {images.map((image) => <Image
        //                     src={urlForImage(image.asset)}
        //                     alt={img.name}
        //                     width={200}
        //                     height={200}
        //                     className='object-cover object-center w-full h-full cursor-pointer' />)}
        //             </div>)
        //         })
        //         }

        //     </div>

        // </div>

        <div className='grid gap-4 lg:grid-cols-5 mx-auto'>
            <div className='max-w-[350px] sm:max-w-full overflow-hidden order-last lg:order-none flex gap-4 lg:flex-col '>
                {images.length !== 1 ? images?.map((img: any, idx: number) =>

                    <div key={idx} className=' overflow-hidden rounded-lg bg-gray-100' onClick={()=>{SetproductImg(img)}}>
                        <Image
                            src={urlForImage(img)}
                            alt={img.name}
                            width={200}
                            height={200}
                            className='object-cover object-center w-full h-full cursor-pointer' />
                    </div>
                ) : images?.map((img: any, idx: number) =>

                    <div key={idx} className=' overflow-hidden rounded-lg bg-gray-100' onClick={()=>{SetproductImg(img)}}>
                        <Image
                            src={urlForImage(img)}
                            alt={img.name}
                            width={150}
                            height={150}
                            className='object-cover object-center  cursor-pointer' />
                    </div> )
                }

            </div>
            <div className='max-w-[350px] relative overflow-hidden  sm:max-w-fit rounded-lg bg-gray-100 lg:col-span-4'>
                <Image
                src={urlForImage(productImg)}
                width={500}
                height={500}
                alt={images[0]._type}    
                className='w-full'
                />
                <span className={clsx('absolute top-0 left-0 overflow-hidden px-3 py-1.5 uppercase tracking-wider  rounded-br-lg  font-medium',{
                " bg-primary text-white ": saleStatus == true,
                " bg-red-500  text-white line-through" : saleStatus == false,
                " hidden" : saleStatus == null
            }
                )}>sale</span>

            </div>

        </div>
    )
}

export default Imagegallery