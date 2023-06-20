import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { MoneyController } from "./controllers/MoneyController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { VendorController } from "./controllers/VendorController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: [VendorController, MoneyController],
    view: ``

  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]