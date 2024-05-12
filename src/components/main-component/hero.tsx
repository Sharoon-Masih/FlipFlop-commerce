import Image from 'next/image'
import React from 'react'
import { client } from '../../../sanity/lib/client';
import { urlForImage } from '../../../sanity/lib/image';
import Link from 'next/link';

async function getData() {  //here i simply create function in which i'm fetchin data from sanity.
    const query = "*[ _type == 'heroImages' ][0]"; //here i create query.
    const data = await client.fetch(query); //here by using the built-in "fetch" method in client function got by sanity, i have fetched data.
    return data;
}
// type dataArray=Awaited<ReturnType<typeof getData()>>

const Hero = async () => {
    const fetched = await getData(); //here when i calling the func so again using await bcuz if i dont use await, it will just call but not wait for promise to resolve, asa hoga jasa idhr sa aya or udr sa gaya.
    // console.log(fetched);
    return (
        <section className='sm:p-16 xs:p-8 px-6 py-16 md:py-12 lg:py-4  relative z-10
   w-full  height md:flex items-center justify-center flex-col'>
            <div className='flex flex-col lg:flex-row justify-between items-center w-[80%] m-auto gap-6'>
                <div className='w-full md:text-center lg:text-start lg:w-96 flex flex-col gap-5 '>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl font-semibold'>Top fashion for a top price!</h1>
                    <p className='text-gray-500 md:text-center lg:text-start leading-relaxed text-base xl:text-lg'>
                        we sell only the most exclusive and high quality products for you.
                        we are the best so come and shop with us.
                    </p>
                </div>
                <div className='flex w-full lg:w-2/3 mb-16 p-4 mx-auto justify-center items-center '>
                    <div className='overflow-hidden relative top-10 left-12 rounded-lg shadow-lg z-10 -ml-12'>
                        <Image src={urlForImage(fetched.Image2)} //as we know that kay sanity will not directly return image URL so we have to do it by the function which we get built-in in sanity. so this urlForImage() func will take our Image1 object and usko imageBuilder ka through resolve krka then url() ma convert krka as a string pass krdega.and also remember that as we discussed above that urlForImage() return the string in form of url,so in nextJs "image" component will not directly accept external links so therefore first we have to go in next.config file and mention the "protocol" and "hostname" there.
                            alt='image1'
                            width={400}
                            height={400} 
                            priority={true} //it will tell nextJs to load img as fast as possible, but its is not mandatory.
                            className='w-full h-full object-cover object-center'/>
                    </div>
                    <div className='overflow-hidden rounded-lg shadow-lg'>
                        <Image src={urlForImage(fetched.Image1)}
                            alt='image2'
                            width={400}
                            height={400} 
                            priority={true}
                            className='w-full h-full object-cover object-center'/>
                    </div>
                </div>
            </div>
            <div className='lg:pb-12 w-[80%] flex items-center justify-center lg:justify-start m-auto  '>
            <div className='grid grid-cols-3 h-12 w-64  items-center rounded-lg divide-x border '>
            <Link href={"/men"}><div className='flex justify-center items-center p-2 hover:bg-gray-100 overflow-hidden m-1 active:text-gray-200 rounded transition duration-100 '><span className='truncate'>Men</span></div></Link>
            <Link href={"/women"}><div className='flex justify-center items-center p-2 hover:bg-gray-100 overflow-hidden m-1 active:text-gray-200 rounded transition duration-100 '><span className='truncate'>Women</span></div></Link>
            <Link href={"/teens"}><div className='flex justify-center items-center p-2 hover:bg-gray-100 overflow-hidden m-1 active:text-gray-200 rounded transition duration-100 '><span className='truncate'>Teens</span></div></Link>
            </div>
            </div>
        </section>
    )
}

export default Hero