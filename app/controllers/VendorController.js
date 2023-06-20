import { AppState } from "../AppState.js"
import { vendorService } from "../services/VendorService.js"
import { setHTML } from "../utils/Writer.js"

function _drawSnacks() {
  let template = ''
  let snacks = AppState.snacks
  snacks.forEach(s => template += s.snackTemplate)
  setHTML('snacks', template)
  console.log('I drew snacks')
}
function _checkCanBuy() {
  vendorService.checkCanBuy()
  _drawSnacks()
}

export class VendorController {
  constructor() {
    AppState.on('money', _checkCanBuy)
    _checkCanBuy()
    _drawSnacks()
    console.log('Log from VendorController')
  }
  buySnack(name) {
    vendorService.buySnack(name)
  }

  test() {
    console.log('Test log from inside of VendorController')
    vendorService.test()
  }

}