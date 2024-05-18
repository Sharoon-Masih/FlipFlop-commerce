"use client"

import { Button } from "./ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
} from "./ui/sheet"
import { useShoppingCart } from "use-shopping-cart"
import clsx from "clsx"
import Image from "next/image"


export function Cart({ side }: { side: "top" | "right" }) {

  const { totalPrice, cartCount, shouldDisplayCart, handleCartClick, cartDetails, removeItem, redirectToCheckout } = useShoppingCart() //acha basic jo yaha sa humna cartCount use kr rhay hain wo to simple automatically cartCount ko btadeta hai or uska through humna nicha condition apply krdi kay agr 0 hoga toh kya display hoga, uska bd jo "shouldDisplayCart" hai yeh ek boolean value leta hai mtlb kay agr "true" hogi toh open kro or agr false hogi toh nhi open krega,"handleCartClick" uska bd jo yeh wala func hai yeh basically "shouldDisplayCart" ki value ko handle krta hai automatically A/c to click.or iss function ko hum yaha par yeh btn bnaya hai waha par onClick a call krengay.like ab iska jo button hna wo navbar ma click hoga toh yeh flow iss tarahsay hoga kay initially " handleCartClick" false hoga toh jab be yeh call hoga agr false hoga toh true hoja ga or agr true hoga toh false hojaga toh yaha be isi tarah hoga kay jasa hi click krenga yeh true hoja toh jab yeh true hoga toh wo value "shouldDisplayCart" ko miljayegi ab zahir hai wo true hoga toh jo sheet ma humna prop pass kia hana open={shouldDisplayCart} wo be boolean value accept krta hai mtlb agr true hoga toh sheet ko open krdega or jo onOpenChange={() => { handleCartClick() }} or jasa hi open hoga "onOpenChange" handleCartClick ko call krega toh pehla shouldDisplayCart true tha wo phr usko false krdega or "onOpenChange" tab trigger hoga jab hum sheet component ma jo "cross" btn hota hai waha click krenga ya with-in sheet kahin be clieck krenga toh.

  //Ad jo cartDetails wala object hai wo actually jo be items cart ma add hongi by using "addItem" func jokay humna use kia hai addtobag walay component may, or yeh work iss tarah sa krta hai kay jo "id" humnay pass ki thi na "addItem" yeh uski base pa ek object bnaleta hai.

  //jo "redirectToCheckout" bnaya hai wo humay direct stripe ka checkout URL pa redirect krdega jasa hi hum checkout button pa click krenga. 

  async function handleCheckoutClick(event: any) {
    event.preventDefault()
    try {
      const result = await redirectToCheckout()
      if (result?.error) {
        console.log("result");
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  return (

    <Sheet open={shouldDisplayCart} onOpenChange={() => { handleCartClick() }}>
      <SheetOverlay>

        <SheetContent side={side} className={clsx("h-[90vh] md:h-screen w-screen md:max-w-lg ",
          {
            "block md:hidden": side === "top",
            "hidden md:block": side === "right"
          }
        )}>
          <SheetHeader>
            <SheetTitle className="text-gray-900">Shopping cart</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col  justify-between h-full">
            <div className="mt-4 flex flex-1 overflow-auto ">
              <ul className="divide-y divide-gray-200 ">
                {cartCount === 0 ? <h1 className=" py-6  text-base font-medium text-gray-900">you dont have anything</h1> :
                  <>
                    {/*now yaha jo uper CartDetails ka object bna hain usko Object ki class ma jo "values" ka method hota hai usme pass kiya hai yeh jo "CartDetails" may keys hna jo kay basically "id's" hi hain toh yeh unko as a array bna kay return krega.or then hum unko apni UI ma display krdeinga.*/}

                    {/* And remember agr hum "Object.values(cartDetails ?? {})" direct as ReactChild use krenga na toh error ayega like this:<div>Object.values(cartDetails ?? {})</div> kiu kay jo ".values" ka method hna wo array return krta hai and ReactNode will not accept array. */}

                    {/* ?? {} iska mtlb hai agr cartDetails undefined hua toh empty object pass hoga */}

                    {Object.values(cartDetails ?? {}).map((entry) => {
                      console.log(entry.category);
                      console.log(entry.name);
                      return <li className="flex py-6" key={entry.id}>
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <Image src={entry.image as string} width={100} height={100}
                            alt={entry.name} />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>{entry.name}</h3>
                              <p className="ml-4">${entry.price}</p>
                            </div>
                            <div><p className="mt-1 text-sm text-gray-500 line-clamp-2 w-auto "> {/*line-clamp property mean that how many line we want to set text so as here we want on two lines only. */}
                              {entry.description}
                            </p></div>

                            <div className="flex flex-1 items-end justify-between text-sm mt-1">
                              <p className="text-gray-500">
                                QTY: {entry.quantity}
                              </p>

                              <div className="flex">
                                <button
                                  onClick={() => removeItem(entry.id)}
                                  type="button"
                                  className="font-medium text-primary hover:text-primary/80"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    })
                    }
                  </>}
              </ul>
            </div>
            <div className="flex flex-col w-full border-t border-gray-200 p-6 items-center justify-between gap-6">
              <div className="flex flex-col items-start justify-between  w-full">
                <span className="text-lg font-semibold text-gray-900">Subtotal: ${totalPrice}</span>
                <p className="text-gray-500 text-xs sm:text-sm">Shipping and taxes are calculated at checkout.</p>
              </div>
              <Button className="w-full flex items-center justify-center rounded-md text-white text-base font-medium p-3" onClick={handleCheckoutClick}>Checkout</Button>
              <div className="flex w-full justify-center items-center ">
                <p className="text-sm text-gray-500">OR{" "} <button className="text-sm text-primary" onClick={() => { handleCartClick() }}>Continue</button></p>
              </div>
            </div>
          </div>

        </SheetContent>
      </SheetOverlay>
    </Sheet >
  )
}
