'use client';

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { ModeToggle } from './theme-toggle';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import LoadingBar from 'react-top-loading-bar'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from 'next/navigation';


const NavBar = () => {
    const [progress, setProgress] = useState(0)
    const pathname = usePathname()
    useEffect(() => {
        setProgress(30)
        setTimeout(() => {
            setProgress(70)

        }, 100);
        setTimeout(() => {
            setProgress(100)

        }, 600);

    }, [pathname])

    useEffect(() => {
        setTimeout(() => {
            setProgress(0)
        }, 800);
    }, [])

    const { setTheme } = useTheme()
    return (
        <nav className='h-16 bg-background/60 sticky top-0 border-b px-6 backdrop-blur flex items-center justify-between z-10'>
            <LoadingBar
                color='#6028ff'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <div className='font-bold md:text-xl text-md'><Link href={'/'}>Blogify</Link></div>
            <ul className='hidden md:flex w-full justify-end space-x-6 items-center '>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/blog"}>Blog</Link></li>
                <li className="buttons space-x-4 px-4">
                    <Link href={'#how-it-works'} className={buttonVariants({ variant: "default" })}>Post your blog</Link>
                    <Link href={'/blog'} className={buttonVariants({ variant: "outline" })}>View Blogs</Link>
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
                            <li><Link href={"/blog"}>Blog</Link></li>
                            <li className="buttons space-x-4 py-4">
                                <Link href={'#how-it-works'} className={buttonVariants({ variant: "default" })}>Post your blog</Link>
                                <Link href={'/blog'} className={buttonVariants({ variant: "outline" })}>View Blogs</Link>
                            </li>

                        </ul>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}

export default NavBar