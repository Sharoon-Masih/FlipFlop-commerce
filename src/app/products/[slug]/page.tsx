import { SimplifiedProduct } from '@/lib/interfaces'
import React from 'react'
import { client, sanityFetch } from '../../../../sanity/lib/client'
import Imagegallery from '@/components/Imagegallery'
import { } from '@/components/ui/button'
import {  TruckIcon } from 'lucide-react'
import RatingBtn from '@/components/ratingBtn'
import AddToBag from '@/components/addToBag'
import { urlForImage } from '../../../../sanity/lib/image'
import CheckoutNow from '@/components/checkoutNow'
// import { revalidatePath } from 'next/cache'

// revalidatePath("/products/[slug]","page")

export const dynamic="force-dynamic"


const SingleProduct = async ({ params }: { params: { slug: string } }) => {
    //here we are doing a query for sepcific slug which we are getting in params.
    console.log(params.slug);
    const query: string = `*[ _type == 'product' && slug.current == '${params.slug}' ]{ 
        _id,
        name,
        price,
        description,
        images,
        "slug":slug.current,
        "sale": sale -> name,
        "saleStatus": sale -> status,
        "category": category -> name,
         price_id
    }`
    const data: SimplifiedProduct[] = await sanityFetch({query:query,tags:["product"]})
    console.log(data);
    const [obj] = data
    const { images, sale, saleStatus, slug } = obj
    return (
        <div className='bg-white'>
            <div className=' max-w-screen-xl overflow-auto  mx-auto height py-8 lg:pt-4 lg:pb-8 px-4  md:px-8'>
                <div className='grid gap-8 md:grid-cols-2'>
                    <Imagegallery images={images} sale={sale} saleStatus={saleStatus} />
                    <div className='flex flex-col items-start justify-start '>
                        <div className='flex flex-col items-start justify-center '>
                            <span className='text-base text-gray-500 font-medium '>{obj.category}</span>
                            <h1 className=' max-w-[350px] sm:max-w-fit text-2xl font-bold text-black truncate'>{obj.name}</h1>

                            <RatingBtn />

                            <div className='flex flex-col pt-9 items-start gap-5'>
                                <div className='flex flex-col items-start'><div className='flex justify-center items-center gap-2'><span className='text-base font-extrabold text-black tracking-wide'>${obj.price}</span><s className='text-red-500 text-sm font-medium'>${obj.price + 30}</s></div>
                                    <p className='text-gray-500 text-sm font-medium antialiased '>incl. Vat plus shipping</p></div>
                                <div className='flex items-center justify-center gap-2 text-gray-500 text-sm font-medium antialiased'><TruckIcon /><p>2-4 Day Shipping</p></div>
                                <div className='flex justify-center items-center gap-3'>
                                    <AddToBag currency='USD' description={data[0].description} id={data[0]._id} image={urlForImage(images[0])} name={data[0].name} price={data[0].price} slug={slug} category={data[0].category} />

                                    <CheckoutNow currency='USD' description={data[0].description} id={data[0]._id} image={urlForImage(images[0])} name={data[0].name} price={data[0].price} slug={slug} category={data[0].category} price_id={data[0].price_id as string} />
                                </div>
                            </div>
                            <div className='text-base text-gray-500 font-normal antialiased pt-9 text-start'><p>{obj.description}</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct