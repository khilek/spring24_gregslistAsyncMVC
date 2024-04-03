import { AppState } from "../AppState.js"
import { jobsService } from "../services/JobsService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


export class JobsController {
  constructor() {
    console.log('Ready to List Jobs')

    this.getJobs()
    AppState.on('jobs', this.drawJobs)
    AppState.on('account', this.drawJobs)
  }


  drawJobs() {
    const jobs = AppState.jobs
    let jobCards = ''
    jobs.forEach(job => jobCards += job.jobCard)
    setHTML('jobs-list', jobCards)
  }

  async getJobs() {
    try {
      await jobsService.getJobs()
    } catch (error) {
      console.error('ERROR', error)
      Pop.toast("Couldn't get Jobs, please try again later", "error")
    }
  }

  showJobForm() {
    const account = AppState.account
    if (account) {
      const formElem = document.getElementById('job-form')
      formElem.classList.remove('d-none')
    }
  }


  async createJob() {
    try {
      event.preventDefault()
      console.log('Creating Job Listing ')
      const form = event.target
      const jobData = getFormData(form)
      console.log(jobData)
      await jobsService.createJob(jobData)
    } catch (error) {
      console.log('Error', error)
      Pop.toast("Couldn't Create Job Listing", 'error')
    }
  }

  async destroyJob(jobId) {
    try {
      const result = await Pop.confirm("ARE YOU SURE YOU WANT TO DELETE THIS LISTING?")
      if (result == false) return
      await jobsService.destroyJob(jobId)
    } catch (error) {
      console.error("Error", error)
      Pop.toast("Couldn't Delete Job Listing", "error")
    }
  }


}