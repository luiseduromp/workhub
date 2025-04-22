import Link from 'next/link'
import React from 'react'
import Logo from './Logo'


const TitleBar = () => {
    return (
        <nav className="sticky top-0 flex flex-row items-center justify-between w-full px-8 bg-white dark:bg-neutral-900 py-5">
            <Link href="/" className="flex items-center"><Logo fill="#eeeeee" className="h-7 me-3" /><h1 className="text-2xl text-neutral-200">WorkHub</h1></Link>
            
            <a href="" target="_blank" className="text-neutral-300">
                Equito App                
            </a>
        </nav>
    )
}

export default TitleBar