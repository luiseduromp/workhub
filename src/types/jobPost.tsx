export interface JobPostInterface {
    companyLogo: string,
    companyName: string
    id: number,
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
    annualSalaryMax?: number,
    annualSalaryMin?: number,
    salaryCurrency?: string,
}