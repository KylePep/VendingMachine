import { AppState } from "../AppState.js"

export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.canBuy = '❌'
  }

  get snackTemplate() {
    return `
      <div class="col-3 d-flex flex-column align-items-center text-center">
      <div class="bg-dark text-light p-5"> 
      <h1>${this.name}</h1>
      <img onclick= "app.VendorController.buySnack('${this.name}')" class="img-fluid selectable snacks-img"
      src="${this.imgUrl}"
      alt="Fries">
      <p>Can Buy: ${this.canBuy}</p>
      <p>Price: ${this.price}</p>
      </div>
      </div>
    `
  }
}