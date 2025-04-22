import React from 'react'
import Logo from './Logo'


const Footer = () => {
    return (
        <footer className="mt-8 bg-neutral-900">
            <div className="flex items-center justify-center py-16 ">
                <Logo className="h-16" />
            </div>
            <div className="text-center px-8 py-5 text-neutral-400 bg-neutral-950/50">
                <p className="text-sm">
                    Made by <a href="https://github.com/luiseduromp" target="_blank" className="font-semibold hover:text-white">Luiseduromp</a> for 
                    <a href="https://www.equito.app/es" target="_blank" className="font-semibold hover:text-white"> Equito App</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer