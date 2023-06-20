import { Snack } from "./models/Snack.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  money = .0;

  /** @type {import('./models/Snack.js').Snack[]} */
  snacks = [
    new Snack({ name: 'fries', price: 1.80, imgUrl: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80' }),
    new Snack({ name: 'chips', price: 2.79, imgUrl: 'https://images.unsplash.com/photo-1617102738820-bee2545405fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80' }),
    new Snack({ name: 'carrot Sticks', price: 3.45, imgUrl: 'https://plus.unsplash.com/premium_photo-1664648005391-73467e630a4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' }),
    new Snack({ name: 'monster energy', price: 4.99, imgUrl: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' }),
    new Snack({ name: 'Nitro White Coffee', price: 3.29, imgUrl: 'https://images.unsplash.com/photo-1626868180643-b6c559b6f66b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80' }),
    new Snack({ name: 'Super Serum', price: 999.99, imgUrl: 'https://images.unsplash.com/photo-1602928309809-776bf9db8658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=698&q=80' }),
    new Snack({ name: 'Hippy Dippy', price: .25, imgUrl: 'https://images.unsplash.com/photo-1592147164960-236b56dd18e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' }),
    new Snack({ name: 'Whole Pinapple', price: 4.69, imgUrl: 'https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80' }),
  ]

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
