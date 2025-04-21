import React from 'react'
import { Input } from '../ui/input'


const SearchBar = () => {
    return (
        <div className="w-full bg-neutral-800/50 backdrop-blur sticky top-2 px-5 py-3 rounded-lg my-8 border border-neutral-800">
            <form className="inline-flex pe-3">
                <Input type="text" placeholder="Search" />
            </form>
        </div>
    )
}

export default SearchBar