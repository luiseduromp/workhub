'use client'

import { useJobStore } from "@/stores/jobStore"
import { useParams } from "next/navigation"
import DOMPurify from 'dompurify'
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import JobInfo from "@/components/jobs/JobInfo"
import JobNotFound from "@/components/jobs/JobNotFound"
import Image from "next/image"


export default function JobPage() {
    const { id } = useParams()
    const jobPost = useJobStore((state) => state.getJobById(Number(id)))
    const router = useRouter()

    if(!jobPost) {
        return (
            <JobNotFound />
        )
    }

    return (
        <main>
            <section className="w-full px-8 md:px-0 md:w-5/6 xl:w-3/4 mx-auto py-3 flex justify-between items-center">                
                <Button onClick={() => router.back()} variant="outline" className="mb-3 cursor-pointer">
                    <ArrowLeft />
                    All Jobs
                </Button>

                <Button variant="outline" className="mb-3 cursor-pointer" asChild>
                    <a href={jobPost.url} target="_blank">
                        Jobicy Page
                        <ExternalLink />
                    </a> 
                </Button>              
            </section>


            <section className="w-full px-8 md:px-0 md:w-5/6 xl:w-3/4 mx-auto py-6 sticky top-[78px] bg-neutral-950/70 backdrop-blur z-10">
                <div className="flex gap-6 items-center">
                    <Image src={jobPost.companyLogo} alt={jobPost.companyName} className="h-16 w-auto lg:h-22 rounded-lg" width={50} height={50} />
                    <div>
                        <h3 className="text-xl font-semibold mb-3">
                            <span className="text-sky-500">{jobPost.companyName}</span> is hiring a
                        </h3>
                        <h1 className="text-2xl md:text-4xl font-semibold">{jobPost.jobTitle}</h1>
                    </div>
                </div>
            </section>

            <JobInfo jobPost={jobPost} />

            <section className="w-full px-8 md:px-0 md:w-5/6 xl:w-3/4 mx-auto py-10">
                
                <h3 className="text-3xl mb-4 font-bold">Job Description</h3>
                <div className="prose max-w-none dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(jobPost.jobDescription) }}
                />
            </section>


        </main>
    )
}