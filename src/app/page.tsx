'use client'

import JobList from "@/components/home/JobList";
import SearchBar from "@/components/home/SearchBar";
import { fetchJobs } from "@/lib/api";
import { useJobStore } from "@/stores/jobStore";
import { JobPostInterface } from "@/types/jobPost";
import { useEffect } from "react";

export default function Home() {
  const { setJobPosts, filters } = useJobStore()

  useEffect(() => {
    const fetchData = async () => {
      const jobs: JobPostInterface[] = await fetchJobs(filters)
      setJobPosts(jobs)
    }

    fetchData()
  }, [filters])


  return (
    <main >
      <section className="w-full px-8 md:px-0 md:w-5/6 xl:w-3/4 mx-auto pb-15 pt-20 text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold inline-block bg-linear-65 from-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">WorkHub</h1>
        <h4 className="text-2xl text-neutral-400">The place to find you dream job</h4>
      </section>

      <SearchBar />

      <section className="w-full px-8 md:px-0 md:w-5/6 xl:w-3/4 mx-auto my-8">
        <JobList />
      </section>
      
    </main>
  );
}
