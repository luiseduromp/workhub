import Link from 'next/link'
import React from 'react'


const JobNotFound = () => {
    return (
        <main className="text-center px-8 py-30">
            <h2 className="text-8xl font-bold mb-3">404</h2>
            <h1 className="text-3xl font-bold mb-3">Something went wrong</h1>
            <p className="text-neutral-300 mb-4">The job post could not be found</p>
            <p className="text-neutral-400">
                Please 
                <Link href="/" className="hover:text-white font-bold"> go back</Link> to the homepage and try again
            </p>

        </main>
    )
}

export default JobNotFound