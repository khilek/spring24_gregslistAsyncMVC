import { AppState } from "../AppState.js";

export class Job {
  constructor(data) {
    this.id = data.id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
    this.creatorId = data.creatorId
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    this.creator = data.creator
  }



  get jobCard() {
    return `

<div class="col-6">
<div class="card">
  <div class="card-body">
    <h3 class="card-title text-center">${this.jobTitle} at ${this.company}</h3>
    <p>Hours: ${this.hours}</p>
    <p>Rate of Pay: $${this.rate}/hr</p>
    <p>Description: ${this.description}</p>
    <div class="d-flex justify-content-end">
      <span class="text-secondary me-2">${this.creator.name}</span>
      <img class="profile-picture profile-picture-sm"
        src="${this.creator.picture}"
        alt="">
    </div>
    <button onclick="app.JobsController.destroyJob('${this.id}')" class="btn btn-danger w-100"><i
        class="mdi mdi-delete"></i></button>
  </div>
</div>
</div>
</div>


`
  }

}






// {
//   "_id": "6476e82a403259fa173a75ae",
//   "company": "SuperDuperCoolPlace",
//   "jobTitle": "Software Developer",
//   "hours": 40,
//   "rate": 1000000,
//   "description": "Are you Super Duper Cool enough?",
//   "creatorId": "646424169346a51b7a721e71",
//   "createdAt": "2023-05-31T06:24:42.302Z",
//   "updatedAt": "2023-05-31T06:24:42.302Z",
//   "__v": 0,
//   "creator": {
//       "_id": "646424169346a51b7a721e71",
//       "name": "Code-y BeepBoop",
//       "picture": "https://68.media.tumblr.com/66dd12f943a2496adcb6d556025a2d96/tumblr_oklf80RKa21shq9dbo1_400.gif",
//       "id": "646424169346a51b7a721e71"
//   },