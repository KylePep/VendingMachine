import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";

class VendorService {
  checkCanBuy() {
    let snacks = AppState.snacks
    snacks.forEach(s => {
      if (AppState.money < s.price) {
        s.canBuy = '❌'
      } else {
        s.canBuy = '✅'
      }
    })
  }
  buySnack(name) {
    let snacks = AppState.snacks
    console.log('snacks:', snacks)
    let foundSnack = snacks.find(s => s.name == name)
    console.log('foundSnacks:', foundSnack)
    if (AppState.money < foundSnack.price) {
      Pop.error('Not Enough Money')
      return
    } {
      AppState.money -= foundSnack.price
    }
  }
  test() {
    console.log('Test Log from within VendorService')
  }

}
export const vendorService = new VendorService();