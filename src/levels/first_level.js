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
import { CustomerScene } from "../scenes/customer_scene"
import { ShoppingCartScene } from "../scenes/shopping_cart_scene"
import { CashierSectionScene } from "../scenes/cashier_section_scene"

/**
 * First Level class
 * */
export class FirstLevel extends Level {
    
    constructor(vnode) {
        super()
        
        //this.salesmanActor = new SalesmanActor()
        //this.visitorActor = new VisitorActor()
        
        this.scenes = {}
        
        this.scene_active = "hallScene"
    }

    view(vnode) {
        return m(".page", [
            m(".container", [
                m(".row", {style: "padding-top: 20px; padding-bottom: 20px;"}, [
                    m(PageHeader),
                ]),
            ]),
            m(HallScene),
            m(PageFooter),
        ])
    }
}


    
    /*
    loadScene(sceneName, sceneObject) {
        super.loadScene(sceneName, sceneObject)
        
        switch(sceneName) {
            case "hallScene":
                this.scene_active = m(HallScene)
                break
            case "customerScene":
                this.scene_active = m(CustomerScene)
                break
            case "cartScene":
                this.scene_active = m(ShoppingCartScene)
                break
            case "cashierScene":
                this.scene_active = m(CashierSectionScene)
                break
            default: 
                this.scene_active = m(HallScene);
        }
        return this.scene[sceneName]
    }
        */
    