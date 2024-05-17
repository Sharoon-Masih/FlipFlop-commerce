import { SimplifiedProduct } from '@/lib/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Product = ({ products }: { products: SimplifiedProduct[] }) => {
    
    return (
        <div className='gap-6 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8 w-full   p-2 justify-items-center'> {/*to center item in grid use justify-items-center */}
            {products.map((product) =>
                <Link href={`/products/${product.slug}`}><div key={product._id} className=' border-b flex flex-col items-center w-full justify-center p-2 relative group gap-3 lg:max-h-80 '>
                    <div className='w-full  relative aspect-square lg:h-64 group-hover:opacity-75'>
                        <Image
                            src={product.imgUrl}
                            alt={product.name}
                            width={300}
                            height={300}
                            className='w-full h-full lg:w-full lg:h-full object-cover object-center lg:object-top' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <div className='flex justify-between items-center w-full gap-3'>
                            <h3 className='text-sm font-medium antialiased truncate'>{product.name}</h3>
                            <span className='text-sm font-bold '>${product.price}</span>
                        </div>
                        <div className='text-sm text-gray-500 font-semibold'>
                            <p>{product.category}</p>
                        </div>
                    </div>
                </div></Link>
            )}
        </div>
    )
}

export default Product