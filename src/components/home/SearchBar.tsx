'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'

import { Button } from '@/components/ui/button'
import { useJobStore } from "@/stores/jobStore";
import FilterSelector from './FilterSelector'
import { Separator } from '@/components/ui/separator'
import { Search } from 'lucide-react';

const SearchBar = () => {
    const { setFilters } = useJobStore()
    const [ tag, setTag ] = useState<string>('')

    const handleJobChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTag(event.target.value)
    }

    const handleSearch = () => {
        setFilters({ tag: tag })
    }

    return (
        <div className="w-full bg-neutral-950/80 backdrop-blur sticky top-[72px] px-5 py-3 my-8">
            <div className="flex pe-3 items-center gap-4 flex-wrap lg:justify-center">

                <FilterSelector select="geo" />
                
                <FilterSelector select="industry" />

                <Separator orientation="vertical" className="py-4 mx-3 hidden lg:block"/>
                
                <div className="flex gap-2">
                    <Input type="text" placeholder="Job position" onChange={handleJobChange} className="w-3xs" />
                    <Button variant='outline' onClick={handleSearch} className="cursor-pointer">
                        <Search className="h-4" />
                    </Button>
                </div>
              
            </div>
        </div>
    )
}

export default SearchBar