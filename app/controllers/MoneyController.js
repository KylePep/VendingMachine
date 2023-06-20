import { AppState } from "../AppState.js"
import { moneyService } from "../services/MoneyService.js"
import { setText } from "../utils/Writer.js"

function _drawMoney() {
  setText('moneyCurrent', `Money: $${AppState.money.toFixed(2)}`)
}
export class MoneyController {
  constructor() {
    _drawMoney()
    AppState.on('money', _drawMoney)
  }


  addMoney() {
    moneyService.addMoney()
  }

}