import m from "mithril"
import { Scene } from "./scene";


/**
 * Actors of Level
 * **/
import { SalesmanActor } from "../players/salesman_actor"
import { VisitorActor } from "../players/visitor_actor"
import { CustomerActor } from "../players/customer_actor"

/**
 * Components of Scene
 **/

 import { CardUser } from "../components/card_user"
 import { CardUserStory } from "../components/card_user_story"
 import { CardComponent } from "../components/card_component"
 import { CardScenario} from "../components/card_scenario"
 import { CardLevel } from "../components/card_level"
 import { CardGameWorld } from "../components/card_game_world"

/***
 * Hall Scene
 * **/
export class HallScene extends Scene {

    constructor() {
        super()
        //this.salesmanActor = SalesmanActor()
        //this.visitorActor = VisitorActor()
    }

    view(vnode) {
        return m(".container", [
            m(".row", {style: "padding-top: 20px; padding-bottom: 20px;"}, [
                m("h2", "Nunca mais desenvolva sistemas de maneira chata e confusa."),
                m("p", [
                    "Agora você pode fazer especificações de sistema no formato de elementos de jogos e abstrair o código de forma mais realista.",
                ]),
                m("p", [ 
                    "Este site está sendo desenvolvimento usando elementos das Metodologias Ágeis e do Design de Jogos. ",
                    "Você pode acessar o ",
                    m("a", {href: "https://github.com/agilebygamedesign/agilebygamedesign.github.io", target: "_blank"}, "código-fonte aqui"),
                    "."
                ]),
            ]),
            m(".row", [
                m(".col-xs-12.col-sm-6.col-lg-3", [
                    m("span.position-relative.top-0.start-10.translate-middle.badge.rounded-pill.bg-success", "1"),
                    m(CardUser),
                ]),
                m(".col-xs-12.col-sm-6.col-lg-3", [
                    m("span.position-relative.top-0.start-10.translate-middle.badge.rounded-pill.bg-success", "2"),
                    m(CardUserStory),
                ]),
                m(".col-xs-12.col-sm-6.col-lg-3", [
                    m("span.position-relative.top-0.start-10.translate-middle.badge.rounded-pill.bg-success", "3"),
                    m(CardComponent),
                ]),
                m(".col-xs-12.col-sm-6.col-lg-3", [
                    m("span.position-relative.top-0.start-10.translate-middle.badge.rounded-pill.bg-success", "4"),
                    m(CardScenario),
                ]),
                m(".col-xs-12.col-sm-6.col-lg-3", [
                    m("span.position-relative.top-0.start-10.translate-middle.badge.rounded-pill.bg-success", "5"),
                    m(CardLevel),
                ]),
                m(".col-xs-12.col-sm-6.col-lg-3", [
                    m("span.position-relative.top-0.start-10.translate-middle.badge.rounded-pill.bg-success", "6"),
                    m(CardGameWorld),
                ]),
            ]),
        ])
    }
}


