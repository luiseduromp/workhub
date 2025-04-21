import Link from 'next/link'
import React from 'react'
import Logo from './Logo'


const TitleBar = () => {
    return (
        <nav className="flex flex-row items-center justify-between w-full px-8 bg-white dark:bg-neutral-900 py-4">
            <Link href="/" className="flex items-center"><Logo fill="#eeeeee" className="h-8 me-3" /><h1 className="text-xl">WorkHub</h1></Link>
            
            <div>
                Equito                
            </div>
        </nav>
    )
}

export default TitleBar