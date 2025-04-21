'use client'

import JobList from "@/components/home/JobList";
import SearchBar from "@/components/home/SearchBar";
import { fetchJobs } from "@/lib/api";
import { useJobStore } from "@/stores/jobStore";
import { JobPostInterface } from "@/types/jobPost";
import { useEffect } from "react";

export default function Home() {
  const { jobPosts, setJobPosts } = useJobStore()

  useEffect(() => {
    const fetchData = async () => {
      const jobs: JobPostInterface[] = await fetchJobs()
      setJobPosts(jobs)
    }
    fetchData()
  }, [])

  return (
    <div >
      <section className="w-full md:w-5/6 xl:w-3/4 mx-auto py-10">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold inline-block bg-linear-65 from-purple-500 to-pink-500 text-transparent bg-clip-text">WorkHub</h1>
        <h4 className="text-2xl text-neutral-400">The place to find you dream job</h4>
      </section>

      <section className="w-full md:w-5/6 xl:w-3/4 mx-auto my-8">
        <SearchBar />
        <JobList jobs={jobPosts} />
      </section>
      
    </div>
  );
}
