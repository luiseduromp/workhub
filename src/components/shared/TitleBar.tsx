'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import { cn } from '@/lib/utils'


const TitleBar = () => {
    const [ isScrolled, setIsScrolled ] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= 100){
                setIsScrolled(true)
                return
            }
            setIsScrolled(false)
        }

        window.addEventListener('scroll', handleScroll)

        return (() => {
            window.removeEventListener('scroll', handleScroll)
        })
    })

    return (
        <nav className={cn("sticky flex flex-row items-center justify-between px-8 bg-white dark:bg-neutral-950/80 backdrop-blur-sm py-5 transition-all duration-300 border mx-auto",
            isScrolled ? "top-1 rounded-xl border-neutral-800 w-[98%] dark:bg-neutral-950/80" : "top-0 w-full dark:bg-neutral-950 border-neutral-950"
        )}>
            <Link href="/" className="flex items-center"><Logo fill="#eeeeee" className="h-7 me-3" /><h1 className="text-2xl text-neutral-200">WorkHub</h1></Link>
        </nav>
    )
}

export default TitleBar