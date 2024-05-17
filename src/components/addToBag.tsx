"use client"
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { Button } from './ui/button';
import { CartProduct } from '@/lib/interfaces';
import { urlForImage } from '../../sanity/lib/image';

const AddToBag = ({name,currency,description,id,image,price,slug,category, }:CartProduct) => {
    const {addItem,handleCartClick}=useShoppingCart(); //yaha basic yeh jo addItem hai it will addItem to cart, and iska sth handleClick iss lia use kr rhay hain bcuz we want that kay jab 'Add to bag' pa click ho toh sth hi cart be side sa open hoja toh iss liya. 
   
    //now here we have to create an object that we have to pass as a prop to addItem bcuz addItem require some data that it will add in cart.
   const Product:CartProduct = {
      name:name,
      description:description,
      price:price,
      image:image,
      currency:currency,
      id:id,
      slug:slug,
      category:category,

    }

  return (
    <Button  className='px-3 py-1.5 text-base font-medium rounded-md antialiased'
    onClick={() =>{
      addItem(Product)
      handleCartClick()
    }}>Add To Bag</Button>
  )
}

export default AddToBag