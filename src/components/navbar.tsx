"use client"
import React from 'react'
import { font1 } from "@/components/fonts";
import {  LucideShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SheetSide } from "@/components/phoneNav"
import { navbtn } from "@/lib/const"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const currentPath=usePathname()
    return (
        <header className='h-[70px] flex  sticky top-0 z-50 border-b backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white '>
            <div className='w-[80%] flex justify-between items-center mx-auto '>
                <h1 className='text-2xl md:text-3xl font-semibold'>Flip<span className='text-primary '>Flop</span></h1>
                <nav className='hidden md:block'>
                    <ul className={`flex justify-between items-center gap-4 `}>
                        {navbtn.map((btn) => btn.path === currentPath ? <Link href={btn.path} key={btn.id}><li className='text-base  text-primary hover:text-primary font-semibold '>{btn.name}</li></Link>:<Link href={btn.path} key={btn.id}><li className='text-base font-normal hover:text-primary transition-colors duration-100  '>{btn.name}</li></Link>)}
                    </ul>
                </nav>
                <div className=''>
                <SheetSide/>
                </div>
            </div>


        </header>
    )
}

export default Navbar