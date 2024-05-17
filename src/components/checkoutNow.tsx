"use client"
import { useShoppingCart } from 'use-shopping-cart'
import { Button } from './ui/button';
import { CartProduct } from '@/lib/interfaces';
import { urlForImage } from '../../sanity/lib/image';

const CheckoutNow = ({name,currency,description,id,image,price,slug,category, price_id}:CartProduct) => {
    const {checkoutSingleItem}=useShoppingCart(); 

    // checkoutSingleItem yeh function basically ek product_id leta hai jo humay stripe sa milti hai when we create product there or stripe ma basically isko "price_id" kaha jata hai.Acha ab yeh func yaha say wo product_Id lega or phr uski base pa product direct stripe ki checkout ma add krega.

    async function buyProduct (price_id:string){
      await checkoutSingleItem(price_id);
    }

  return (
    <Button variant={"ghost"} className='px-3 py-1.5 text-base font-medium rounded-md antialiased'
    onClick={() =>{
    //   addItem(Product)
    buyProduct(price_id as string)
    //   handleCartClick()
    }}>Check out</Button>
  )
}

export default CheckoutNow