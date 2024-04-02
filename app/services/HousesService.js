import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"

class HousesService {

  async getHouses() {
    const response = await api.get('api/houses')
    console.log('🏡🪓', response);
    const houses = response.data.map(house => new House(house))
    AppState.houses = houses
  }

  async createHouse(houseData) {
    const response = await api.post('api/houses', houseData)
    console.log('Creating 🏡', response);
    const house = new House(response.data)
    AppState.houses.push(house)
  }

  async destroyHouse(houseId) {
    const response = await api.delete(`api/houses/${houseId}`)
    console.log('DESTROYING', response);
    const indexToRemove = AppState.houses.findIndex(house => house.id == houseId)
    AppState.houses.splice(indexToRemove, 1)
  }


}

export const housesService = new HousesService()