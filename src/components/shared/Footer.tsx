import React from 'react'
import Logo from './Logo'


const Footer = () => {
    return (
        <footer className="mt-8 bg-neutral-900">
            <div className="pt-16 pb-12">
                <Logo className="h-20 mb-3 mx-auto mb-8" />
                <p className="text-neutral-300 text-center mb-4">
                    Built with <a href="https://jobicy.com/jobs-rss-feed" target="_blank" className="hover:text-white hover:underline underline-offset-4">Jobicy API</a>
                </p>
            </div>
            <div className="text-center px-8 py-5 text-neutral-400 bg-neutral-950/50">
                <p className="text-sm mb-1">
                    Made by <a href="https://github.com/luiseduromp" target="_blank" className="font-semibold hover:text-white">Luiseduromp</a>
                </p>
                <p className="text-xs">
                    Project developed for a technical test in a hiring process
                </p>
            </div>
        </footer>
    )
}

export default Footer