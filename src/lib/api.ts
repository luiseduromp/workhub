import axios from "axios"

const JOB_API = "https://jobicy.com/api/v2/remote-jobs"

interface FilterInterface {
    tag: string
    geo: string
    industry: string
}

export async function fetchJobs( filters: Partial<FilterInterface> = {} ){
    try {
        const params = Object.fromEntries(
            Object.entries(filters).filter(([_, v]) => v !== '' && v !== undefined)
        )
        
        const response = await axios.get(JOB_API, { params: { count:50, ...params} });
        return response.data.jobs
        
    } catch (error) {
        throw new Error("Error fetching job posts: " + error);
    }
    
}
