import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class HousesController {
  constructor() {
    console.log('Ready to Sell 🏡')

    this.getHouses()
    AppState.on('houses', this.drawHouses)
    AppState.on('account', this.drawHouses)
    AppState.on('account', this.showHouseForm)
    this.showHouseForm
  }

  drawHouses() {
    const houses = AppState.houses
    let houseCards = ''
    houses.forEach(house => houseCards += house.houseCard)
    setHTML('houses-list', houseCards)
  }

  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      console.error('Error', error)
      Pop.toast("Couldn't get Houses, Please try again at another time", "error")
    }
  }


  showHouseForm() {
    const account = AppState.account
    if (account) {
      const formElem = document.getElementById('house-form')
      formElem.classList.remove('d-none')
    }
  }


  async createHouse() {
    try {
      event.preventDefault()
      console.log('Creating House Listing Card')
      const form = event.target
      const houseData = getFormData(form)
      console.log(houseData)
      await housesService.createHouse(houseData)
    } catch (error) {
      console.log('ERROR', error)
      Pop.toast("Couldn't Post House", "error")
    }
  }

  async destroyHouse(houseId) {
    try {
      const result = await Pop.confirm('ARE YOU SURE YOU WANT TO DELETE?')
      if (result == false) return
      await housesService.destroyHouse(houseId)
    } catch (error) {
      console.error('ERROR', error)
      Pop.toast("Couldn't Delete House", "error")
    }
  }



}
