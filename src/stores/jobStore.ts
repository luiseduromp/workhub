import axios from "axios"
import { create } from "zustand"
import { JobPostInterface } from "@/types/jobPost"

type JobStore = {
    jobPosts: JobPostInterface[]
    filters: FilterInterface
    setJobPosts: (jobPosts: JobPostInterface[]) => void
    getJobById: (id: Number) => JobPostInterface | undefined   
    setFilters: (filters: Partial<FilterInterface>) => void
}

export interface FilterInterface {
    tag: string
    geo: string
    industry: string
}

export const useJobStore = create<JobStore>((set, get) => ({
    jobPosts: [],
    filters: { tag: '', geo: '', industry: '' },
    setJobPosts: (jobPosts) => set({ jobPosts }),
    setFilters: (filters) => {
        set((state) => ({ filters: { ...state.filters, ...filters } }))
    },
    getJobById: (id:Number) => {
        const { jobPosts } = get()
        return jobPosts.find((job) => job.id === id)
    },
}))