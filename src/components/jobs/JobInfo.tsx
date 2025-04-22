import React from 'react'
import type { JobPostInterface } from '@/types/jobPost'

const fields = {
    jobGeo: "Location",
    jobType: "Job Type",
    jobLevel: "Job Level",
    jobIndustry: "Job Category",
}

const JobInfo = ({jobPost}: {jobPost:JobPostInterface}) => {
    return (
        <section className="w-full px-8 md:px-0 md:w-5/6 xl:w-3/4 mx-auto py-10 ">
            <h3 className="text-3xl mb-4 font-bold">Job Intro</h3>
            <p className="mb-8 text-neutral-300">
                {jobPost.jobExcerpt}
            </p>

            <div className="border border-neutral-700 px-8 py-4 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-neutral-900/70">
                {Object.entries(fields).map(([key, value]) => (
                    <div key={key} className="mb-3">
                        <p className="text-neutral-400">{value}</p>
                        <p className="text-lg font-semibold">{jobPost[key as keyof JobPostInterface]?.toString()}</p>
                    </div>
                ))}

                {(jobPost.annualSalaryMin && jobPost.annualSalaryMax) &&
                    <div>
                        <p className="text-neutral-400">Annual Salary </p>
                        {<p className="text-lg font-semibold">
                            {jobPost?.annualSalaryMin.toString()} - {jobPost?.annualSalaryMax.toString()} 
                            {jobPost?.salaryCurrency ? <span> {jobPost.salaryCurrency}</span> : "USD"}
                        </p>}                       
                    </div>
                }
            </div>
        </section>
    )
}

export default JobInfo