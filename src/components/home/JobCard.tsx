import React from 'react'
import Link from 'next/link'

import { Separator } from '@/components/ui/separator'

import { JobPostInterface } from '@/types/jobPost'	

const JobCard = ({ jobPost }:{ jobPost:JobPostInterface }) => {
    return (
        <li className="group mb-4">
            <Link href={`/jobs/${jobPost.id}`} className="flex border border-gray-100 dark:border-neutral-800 rounded-lg w-full group-hover:bg-neutral-50 dark:group-hover:bg-black transition-all duration-250" >
                <div className="px-4 py-4">
                    <img className="w-16 h-16 rounded-xl" width={50} height={50} src={jobPost.companyLogo} alt={jobPost.companyName} />
                </div>
                <div className="py-3 ps-4 pe-8 flex-auto">
                    <p className="text-neutral-600 dark:text-neutral-300 font-semibold mb-2">
                        {jobPost.companyName} <span className="font-normal rounded-full text-sm bg-neutral-700 ms-2 px-3 py-[1px]">{jobPost.jobType}</span>
                    </p>
                    <p className="text-xl text-neutral-600 font-bold group-hover:text-neutral-900 dark:text-neutral-300 dark:group-hover:text-white">{jobPost.jobTitle}</p>
                    
                    <Separator className="my-2" />
                    <p className="text-neutral-500 dark:text-neutral-400">{jobPost.jobGeo}</p>
                </div>
            </Link>
        </li>
    )
}

export default JobCard