import { AppState } from "../AppState.js"

class MoneyService {
  addMoney() {
    AppState.money += 1.25
    console.log('addMoney log from inside Money Service' + AppState.money)
  }


}

export const moneyService = new MoneyService()


