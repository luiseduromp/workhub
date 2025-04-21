export interface JobPostInterface {
    companyLogo: string,
    companyName: string
    id: Number,
    jobDescription: string,
    jobExcerpt: string,
    jobGeo: string,
    jobIndustry: string[],
    jobLevel: string,
    jobSlug: string,
    jobTitle: string,
    jobType: string[],
    pubDate: string,
    url: string,
    annualSalaryMax?: Number,
    annualSalaryMin?: Number,
    salaryCurrency?: string,
}