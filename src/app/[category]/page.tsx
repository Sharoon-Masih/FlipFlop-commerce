import { SimplifiedProduct } from '@/lib/interfaces'
import React from 'react'
import { client } from '../../../sanity/lib/client'
import Product from '@/components/newProduct'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'

const SingleCategory = async ({ params }: { params: { category: string } }) => {
    const query: string = `*[ _type == 'product' && category -> name == '${params.category}' ]{ 
        _id,
        name,
        price,
        description,
        "slug":slug.current,
        "category": category -> name,
        "imgUrl" : images[0].asset -> url,
        "sale":sale -> name,
        "saleStatus":sale -> status,
    }`
    const categoryPdt: SimplifiedProduct[] = await client.fetch(query)
    return (
        <section className='sm:p-16 xs:p-8 px-6 py-12 lg:py-10  relative z-10
        w-full  height'>
            <div className='xl:w-[80%] 2xl:max-w-[1280px]  flex flex-col m-auto items-start justify-start  gap-6 px-2 lg:px-0 '>
                <div className='flex justify-between items-center w-full gap-6 flex-wrap'>
                    <h1 className='text-3xl font-semibold'>Latest in {params.category}'s</h1>
                </div>
                <Product products={categoryPdt} />
            </div>
        </section>
    )
}

export default SingleCategory