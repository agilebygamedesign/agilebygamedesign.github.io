import m from "mithril"
import { Level } from "./level"

/**
 * Missions
 * https://github.com/cxong/cdogs-sdl/tree/master/missions
 * **/

/**
 * Actors of Level
 * **/
import { SalesmanActor } from "../players/salesman_actor"
import { VisitorActor } from "../players/visitor_actor"

/**
 * Level Layout Components
 * 
*/
import { PageHeader } from "../components/page_header"
import { PageFooter } from "../components/page_footer"

/**
 * Content Layout Components
 * */
import { HallScene } from "../scenes/hall_scene"
import { ActorScene } from "../scenes/actor_scene"
import { CustomerScene } from "../scenes/customer_scene"
import { ShoppingCartScene } from "../scenes/shopping_cart_scene"
import { CashierSectionScene } from "../scenes/cashier_section_scene"

/**
 * First Level class
 * */
export class FirstLevel extends Level {

    static scene_active = m(HallScene)

    constructor(vnode) {
        super()
        
        //this.salesmanActor = new SalesmanActor()
        //this.visitorActor = new VisitorActor()
        
    }

    view(vnode) {
        return m(".page", [
            m(".container", [
                m(".row", {style: "padding-top: 20px; padding-bottom: 20px;"}, [
                    m(PageHeader),
                ]),
            ]),
            FirstLevel.scene_active,
            m(PageFooter),
        ])
    }
    
}

