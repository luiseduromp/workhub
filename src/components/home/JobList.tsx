'use client'

import React, { useEffect, useState, useRef } from 'react'
import JobCard from '@/components/home/JobCard'
import { Skeleton } from '@/components/ui/skeleton'
import { LoaderCircle } from 'lucide-react'
import { JobPostInterface } from '@/types/jobPost'



export default function JobList({ jobs }: { jobs: JobPostInterface[] }) {
    const BATCH_SIZE = 10

    const [visibleJobs, setVisibleJobs] = useState<JobPostInterface[]>([])
    const [loading, setLoading] = useState(false)
    const [index, setIndex] = useState(0)

    const loaderRef = useRef<HTMLDivElement | null>(null)

    const loadMore = () => {
        setLoading(true)
        setTimeout(() => {
            const nextIndex = index + BATCH_SIZE
            const newBatch = jobs.slice(index, nextIndex)
            setVisibleJobs((prev) => [...prev, ...newBatch])
            setIndex(nextIndex)
            setLoading(false)
        }, 1000)
    }

    useEffect(() => {
        if (!loaderRef.current) return

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !loading && index < jobs.length) {
                loadMore()
            }
        })

        observer.observe(loaderRef.current)

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current)
            }
        }
    }, [loaderRef.current, loading, index, jobs.length])


    return (
        <section>
            
            

            <ul>
                {visibleJobs.map((job) => (
                    <JobCard key={String(job.id)} jobPost={job} />
                ))}
            </ul>

            {loading && (
                <>
                    <div className="flex text-neutral-400 my-4 items-center space-x-8 justify-center">
                        <LoaderCircle className="animate-spin h-6 me-3" />
                        Loading More Jobs...
                    </div>
                    
                    <div className="flex items-center mb-3 p-4 border border-neutral-100 rounded-lg w-full dark:border-neutral-800">
                        <Skeleton className="h-16 w-16 rounded-full" />
                        <div className="space-y-3 px-6">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </div>
                </>
            )}

            <div ref={loaderRef} className="h-10"></div>
        </section>
    )
}