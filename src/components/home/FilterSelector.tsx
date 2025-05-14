'use client'

import React, { useState, useEffect } from 'react'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
Popover,
PopoverContent,
PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import { Check, ChevronsUpDown } from "lucide-react"

import type { ParamsInterface } from '@/lib/constants'
import { cn } from '@/lib/utils'

import { useJobStore } from '@/stores/jobStore'


const FilterSelector = ({ select }: { select: 'geo' | 'industry' }) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const [label, setLabel] = useState("")

    const [items, setItems] = useState<ParamsInterface[]>([])

    const { setFilters } = useJobStore()

    useEffect(() => {
        (async () => {
            const params = await import('@/lib/constants')
            if(select === 'geo'){
                setItems(params.locations)
                setLabel('location')
            } else {
                setItems(params.industries)
                setLabel('industry')
            }
        })()
    }, [])

    return (

            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="min-w-3xs w-auto justify-between"
                    >
                        {value
                            ? items.find((item) => item.name === value)?.name
                            : `Select ${label}`}
                        <ChevronsUpDown className="opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="min-w-3xs w-auto p-0">
                    <Command>
                        <CommandInput placeholder={`Search ${label}...`} />
                        <CommandList>
                            <CommandEmpty>No {label} found.</CommandEmpty>
                            <CommandGroup>
                                <CommandItem
                                    onSelect={() => {
                                        setValue('')
                                        setFilters( { [select]: '' })
                                        setOpen(false)
                                    }}
                                >
                                    Any {label}
                                </CommandItem>
                                {items.map((item) => (
                                    <CommandItem
                                        key={item.id.toString()}
                                        value={item.slug}
                                        onSelect={(currentValue) => {
                                            const itemName = items.find((i) => i.slug === currentValue)?.name
                                            console.log(itemName)
                                            setValue(itemName || "")
                                            setFilters({ [select]: currentValue })
                                            setOpen(false)
                                        }}
                                    >
                                    {item.name}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === item.name ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>

    )
}

export default FilterSelector