import { create } from "zustand"

import { JobPostInterface } from "@/types/jobPost"

type JobStore = {
    jobPosts: JobPostInterface[]
    setJobPosts: (jobPosts: JobPostInterface[]) => void
    getJobById: (id: Number) => JobPostInterface | undefined
}

export const useJobStore = create<JobStore>((set, get) => ({
    jobPosts: [],
    setJobPosts: (jobPosts) => set({ jobPosts }),
    getJobById: (id:Number) => {
        const { jobPosts } = get()
        return jobPosts.find((job) => job.id === id)
    },
}))