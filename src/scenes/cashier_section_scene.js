import { Scene } from "./scene";


/**
 * Actors of Level
 * **/
import { CashierActor } from "../players/cashier_actor"
import { CustomerActor } from "../players/customer_actor"

export class CashierSectionScene extends Scene {
    constructor() {
        this.cashierActor = CashierActor()
        this.customerActor = CustomerActor()
    }
}


