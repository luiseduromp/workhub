'use client'

import { useJobStore } from "@/stores/jobStore"
import { useParams } from "next/navigation"
import DOMPurify from 'dompurify'


export default function JobPage() {
    const { id } = useParams()
    const jobPost = useJobStore((state) => state.getJobById(Number(id)))

    if(!jobPost) {
        return (
            <div>
                <h2 className="text-2xl">Something went Wrong</h2>
            </div>
        )
    }

    return (
        <main>
            <section className="w-full md:w-5/6 xl:w-3/4 mx-auto py-10">
                <img src={jobPost.companyLogo} alt={jobPost.companyName} className="h-12 w-12 rounded-lg mb-3" />
                <h3 className="text-xl font-semibold mb-3">{jobPost.companyName} is hiring a</h3>
                <h1 className="text-2xl md:text-4xl font-semibold mb-3">{jobPost.jobTitle}</h1>
                <p>{jobPost.jobType}</p>

            </section>

            <section className="w-full md:w-5/6 xl:w-3/4 mx-auto py-10">
                <div className="prose max-w-none dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(jobPost.jobDescription) }}
                />
            </section>


        </main>
    )
}