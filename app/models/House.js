import { AppState } from "../AppState.js";

export class House {
  constructor(data) {
    this.id = data.id
    this.imgUrl = data.imgUrl
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    this.creator = data.creator

  }

  get houseCard() {
    return `
    <div class="col-6">
      <div class="card">
        <img class="card-img-top"
          src="${this.imgUrl}"
          alt="">
        <div class="card-body">
          <h3 class="card-title text-center">$${this.price}</h3>
          <p>Bedrooms: ${this.bedrooms}</p>
          <p>Bathrooms: ${this.bathrooms}</p>
          <p>Levels: ${this.levels}</p>
          <p>Year: ${this.year}</p>
          <p>Description: ${this.description}</p>
          <div class="d-flex justify-content-end">
            <span class="text-secondary me-2">${this.creator.name}</span>
            <img class="profile-picture profile-picture-sm"
              src="${this.creator.picture}"
              alt="">
          </div>
          <button onclick="app.HousesController.destroyHouse('${this.id}')" class="btn btn-danger w-100"><i
              class="mdi mdi-delete"></i></button>
        </div>
      </div>
    </div>
  </div>
      `
  }


}

// {
//   "_id": "64640a81afbe13b729b6517f",
//   "bedrooms": 6,
//   "bathrooms": 4,
//   "levels": 3,
//   "imgUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.icoc.edu%2Fwp-content%2Fuploads%2F2017%2F09%2Fshutterstock_523076503-e1506375581135.jpg&f=1&nofb=1&ipt=e393a4edd238ce89733d1dbb0ef3622955aca0ea753c07262b329c2bb413f4ad&ipo=images",
//   "year": 1918,
//   "price": 56000,
//   "description": "We swear it is up to code",
//   "creatorId": "6463f697af735760607741be",
//   "createdAt": "2023-05-16T22:58:09.733Z",
//   "updatedAt": "2023-05-16T22:58:09.733Z",
//   "__v": 0,
//   "creator": {
//       "_id": "6463f697af735760607741be",
//       "name": "SadFish",
//       "picture": "https://c4.wallpaperflare.com/wallpaper/921/14/483/fish-sad-fantasy-art-1680x1050-animals-fish-hd-art-wallpaper-thumb.jpg",
//       "id": "6463f697af735760607741be"
//   },
//   "id": "64640a81afbe13b729b6517f"
// },