'use client';

import React from 'react'
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { ModeToggle } from './theme-toggle';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const NavBar = () => {
    const { setTheme } = useTheme()
    return (
        <nav className='h-16 bg-background/60 sticky top-0 border-b px-6 backdrop-blur flex items-center justify-between'>
            <div className='font-bold md:text-xl text-md'>Blogify</div>
            <ul className='hidden md:flex w-full justify-end space-x-6 items-center '>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <li><Link href={"/blog"}>Blog</Link></li>
                <li><Link href={"/contact"}>Contact</Link></li>
                <li className="buttons space-x-4 px-4">
                    <Link href={"/login"} className={buttonVariants({ variant: "outline" })}>Login</Link>
                    <Link href={"/signup"} className={buttonVariants({ variant: "outline" })}>SignUp</Link>
                </li>

            </ul>
            <div className='flex items-center gap-2'>
                <ModeToggle />

                <Sheet>
                    <SheetTrigger><HamburgerMenuIcon className='md:hidden size-7' /></SheetTrigger>

                    <SheetContent className="w-[300px] sm:w-[540px]">
                        <SheetTitle className='py-4'>Menu</SheetTitle>
                        <ul className='w-full justify-center items-center space-y-4'>
                            <li><Link href={"/"}>Home</Link></li>
                            <li><Link href={"/about"}>About</Link></li>
                            <li><Link href={"/blog"}>Blog</Link></li>
                            <li><Link href={"/contact"}>Contact</Link></li>
                            <li className="buttons space-x-4 py-4">
                                <Link href={"/login"} className={buttonVariants({ variant: "outline" })}>Login</Link>
                                <Link href={"/signup"} className={buttonVariants({ variant: "outline" })}>SignUp</Link>
                            </li>

                        </ul>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}

export default NavBar