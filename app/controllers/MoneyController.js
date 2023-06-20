import { AppState } from "../AppState.js"
import { moneyService } from "../services/MoneyService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setText } from "../utils/Writer.js"

function _drawMoney() {
  setText('moneyCurrent', `Money: $${(AppState.money).toFixed(2)}`)
}
export class MoneyController {
  constructor() {
    _drawMoney()
    AppState.on('money', _drawMoney)
  }

  // addPlayer(event) {
  //   event.preventDefault()
  //   const form = event.target

  //   const formData = getFormData(form)
  //   console.log(formData)

  //   playerService.addPlayer(formData)

  //   form.reset()
  //   _drawPlayers()
  // }


  addMoney() {
    moneyService.addMoney()
  }

}