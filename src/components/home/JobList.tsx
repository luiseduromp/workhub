'use client'

import React, { useEffect, useState, useRef } from 'react'
import JobCard from '@/components/home/JobCard'
import { Skeleton } from '@/components/ui/skeleton'
import { LoaderCircle } from 'lucide-react'
import { JobPostInterface } from '@/types/jobPost'
import { useJobStore } from '@/stores/jobStore'

export default function JobList() {
    const { jobPosts } = useJobStore()
    const [visibleJobs, setVisibleJobs] = useState<JobPostInterface[]>([])
    const [loading, setLoading] = useState(false)
    const indexRef = useRef(0)

    const BATCH_SIZE = 10

    const loaderRef = useRef<HTMLDivElement | null>(null)

    const loadMore = () => {
        setLoading(true)
        setTimeout(() => {
            if (jobPosts.length){

                const nextIndex = indexRef.current + BATCH_SIZE
                const newBatch = jobPosts.slice(indexRef.current, nextIndex)
                setVisibleJobs((prev) => [...prev, ...newBatch])
                indexRef.current = nextIndex
            }
            setLoading(false)
        }, 1000)
    }

    useEffect(() => {
        setLoading(true)
        indexRef.current = 0
        setVisibleJobs([])
        loadMore()
    }, [ jobPosts ])

    useEffect(() => {
        if (!loaderRef.current) return

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !loading && indexRef.current < jobPosts.length) {
                loadMore()
            }
        })

        observer.observe(loaderRef.current)

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current)
            }
        }
    }, [loaderRef.current, loading, indexRef.current, jobPosts.length])


    return (
        <section>

            {jobPosts.length ? 
                (<ul>
                    {visibleJobs.map((job) => (
                        <JobCard key={String(job.id)} jobPost={job} />
                    ))}
                </ul>) : (<p>No JobPosts have been found that match the criteria</p>)
            }

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