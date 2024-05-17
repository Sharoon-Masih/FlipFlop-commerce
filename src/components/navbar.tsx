"use client"
import React from 'react'
import { Cart } from "@/components/CartNav"
import { navbtn } from "@/lib/const"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useShoppingCart } from 'use-shopping-cart';
import { Button } from './ui/button';
import { LucideShoppingBag } from 'lucide-react';
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';

const Navbar = () => {
    const currentPath = usePathname()
    const { handleCartClick, cartCount } = useShoppingCart();
    const userStatus=useUser();
    return (
        <header className='w-screen overflow-hidden  shadow h-[70px] flex  sticky top-0 z-50 border-b backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white px-4 md:px-0 '>
            <div className='w-[90%] md:w-[80%] 2xl:max-w-[1280px]  flex justify-between items-center mx-auto '>
                <Link href={"/"}><h1 className='text-2xl md:text-3xl font-semibold '>Flip<span className='text-primary truncate'>Flop</span></h1></Link>
                <nav className='hidden md:block'>
                    <ul className={`flex justify-between items-center gap-4 `}>
                        {navbtn.map((btn) => btn.path === currentPath ? <Link href={btn.path} key={btn.id}><li className='text-base  text-primary hover:text-primary font-semibold '>{btn.name}</li></Link> : <Link href={btn.path} key={btn.id}><li className='text-base font-normal hover:text-primary transition-colors duration-100  '>{btn.name}</li></Link>)}
                    </ul>
                </nav>
                <div className='flex justify-between items-center gap-1 lg:gap-3'>
                    <div>
                        <SignedOut>
                            <SignInButton>
                                <div>
                                <Button variant={"secondary"} className='px-3 text-primary lg:text-gray-900  lg:hover:text-primary'>Sign-In</Button></div>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <div className='flex justify-center items-center gap-2 font-medium antialiased truncate h-full '>
                            {userStatus.isLoaded && userStatus.isSignedIn && <div className='hidden lg:block'><span >Hey</span> {userStatus.user.firstName}!</div>}
                            <UserButton />
                            </div>  
                        </SignedIn>
                    </div>
                    <Button variant="outline" className="flex flex-col justify-center items-center h-[60px] w-[70px] md:h-[60px] md:w-[70px] relative md:pt-3" onClick={() => { handleCartClick() }}><LucideShoppingBag /><span className="text-xs text-primary hidden md:block">cart</span>
                        {cartCount !== undefined && cartCount > 0 &&
                            <div className='w-5 h-5 flex justify-center items-center rounded-full border-primary border-[3px] absolute top-[4px] right-[8px] md:right-[6px] md:top-[3px] text-xs antialiased'>
                                {cartCount}
                            </div>
                        }
                    </Button>
                    <Cart side='top' />
                    <Cart side='right' />

                </div>
            </div>


        </header>
    )
}

export default Navbar