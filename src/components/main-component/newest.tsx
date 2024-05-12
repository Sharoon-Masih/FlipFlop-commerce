import React from 'react'
import { client } from '../../../sanity/lib/client'
import { SimplifiedProduct } from '@/lib/interfaces'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ArrowRightIcon } from 'lucide-react'
import Product from '../newProduct'
const Newest = async () => {
    //now abi jo yeh query bnai hai first of all "[0...4]" its mean i only need 4 products from array not more than it,then now as we want only the those product which are newest so we can do that easily by sorting them through "_createdAt" property ab jo inka darmayan (|)pipe sign laga hna its mean kay first condition yeh haka srf 4 product chaiya and secondly jo product A/c to _createdAt ka unko desc order ma show kro usse yeh hoga kay jo abi new product bni hain wo uper ajagi or old nichay chli jayegi, then the properties written inside {} means yehi properties chaiya srf object ab jo  _id,name,price yeh properties toh simply hum get krlenga by name, but if you remember so we have created some field whose type is "reference" means they are refering any other "Content model(schema)" ab agr asi types ma say kuch data lena hai toh simply ek literal bnalo jiska name kuch be hoskta hai like here it is  "category" or uska agay mena  "category->name" krdia iska mtlb yeh haka jo Product kay documents/product bna hoga usme jis product ki jo category wo return hojagi bcuz it is reference type iss lia iss tarah krna parega,and iska ilawa "imgUrl" mabi simple "images" ka jo array hai jo huma har product ka sth milta hai usme sa "asset" wali property ma jaka usko "url" ma convert krdo or last ma hum "slug" ko get kr rhay hain basically slug ka mtlb hai dynamic route segment or yeh jo humna "Product" schema ma ek field "slug" type ki bnai thi na yeh usi ka through A/c to name ka khudi generate krta hai or yaha par hum usko get kr rhay hain or yeh "slug.current" iss lia krna par raha hai bcuz "slug" be as a object return hota hai toh we want only the current slug name so iss lia "slug.current" kia or direct iss lia nhi kra kiu kay agr direct krtay toh error ata bcuz direct iss tarah sa nested object ma say property nhi access krsktay uskay liya ek khud sa key dea lazmi hai jo kay humna "slug" ka name sa di hai, iska name ma kuch be rakh skta hun: 

    //cheat-sheet of queries= https://www.sanity.io/docs/query-cheat-sheet 
    const query = `*[ _type == "product"][0...4]{ 
        _id,
        name,
        price,
        "slug": slug.current,
        "category": category->name,
        "imgUrl" : images[0].asset -> url
        }`
    const NewProduct: SimplifiedProduct[] = await client.fetch(query)
    console.log(NewProduct);
    return (
        <section className='sm:p-16 xs:p-8 px-6 py-12 lg:py-4  relative z-10
        w-full  height'>
            <div className='lg:w-[80%] flex flex-col m-auto items-start justify-start  gap-6 px-2 lg:px-0'>
                <div className='flex justify-between items-center w-full gap-6 flex-wrap'>
                    <h1 className='text-3xl font-semibold'>Our Newest Product</h1>
                    <Link href={"/all"}><Button className=' text-base flex items-center justify-between gap-2'>See all <span><ArrowRightIcon /></span></Button></Link>
                </div>
                <Product products={NewProduct}/>
            </div>
        </section>
    )
}

export default Newest

