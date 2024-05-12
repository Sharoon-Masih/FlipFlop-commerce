"use client"

import { Button } from "./ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { LucideShoppingBag } from "lucide-react"
import { navbtn } from "@/lib/const"
import Link from "next/link"

export function SheetSide() {
  return (
    <Sheet >
      <SheetTrigger asChild >
        <Button variant="outline" className="flex flex-col justify-center items-center gap-1 md:h-[60px] md:w-[60px] "><LucideShoppingBag /><span className="text-xs text-primary hidden md:block">cart</span></Button>
      </SheetTrigger>
      <SheetContent side="top" className="flex flex-col justify-between items-start gap-4">
        {navbtn.map((btn) => <Link href={btn.path} key={btn.id}>{btn.name}</Link>)}

      </SheetContent>
    </Sheet>
  )
}
