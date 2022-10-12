import { Scene } from "./scene"

/**
 * Actors of Level
 * **/
 import { SalesmanActor } from "../players/salesman_actor"
 import { VisitorActor } from "../players/visitor_actor"
 import { CustomerActor } from "../players/customer_actor"


export class ShoppingCartScene extends Scene {
    constructor() {
        this.salesmanActor = SalesmanActor()
        this.visitorActor = VisitorActor()
    }
}


