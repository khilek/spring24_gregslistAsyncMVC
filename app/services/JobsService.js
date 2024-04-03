import { AppState } from "../AppState.js"
import { Job } from "../models/Job.js"
import { api } from "./AxiosService.js"

class JobsService {


  async getJobs() {
    const response = await api.get('api/jobs')
    console.log('jobs', response);
    const jobs = response.data.map(job => new Job(job))
    AppState.jobs = jobs
  }



  async createJob(jobData) {
    const response = await api.post('api/jobs', jobData)
    console.log('Creating Job', response)
    const job = new Job(response.data)
    AppState.jobs.push(job)
  }

  async destroyJob(jobId) {
    const response = await api.get(`api/jobs/${jobId}`)
    console.log('DESTROYING', response);
    const indexToRemove = AppState.jobs.findIndex(job => job.id == jobId)
    AppState.jobs.splice(indexToRemove, 1)
  }


}

export const jobsService = new JobsService()