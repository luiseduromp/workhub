import axios from "axios"


const JOB_API = "https://jobicy.com/api/v2/remote-jobs"

export async function fetchJobs(){
    const response = await axios.get(JOB_API, { params: { count: 50 }});
    return response.data.jobs
}
