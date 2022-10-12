import m from "mithril"

import { Level } from "./level"

/**
 * Level Layout Components
 * 
*/
import { PageHeader } from "../components/page_header"
import { PageFooter } from "../components/page_footer"

/**
 * Content Layout Components
 * */
import { CardUser } from "../components/card_user"
import { CardUserStory } from "../components/card_user_story"
import { CardComponent } from "../components/card_component"
import { CardScenario} from "../components/card_scenario"
import { CardLevel } from "../components/card_level"
import { CardGameWorld } from "../components/card_game_world"

/**
 * First Level class
 * */
export class FirstLevel extends Level {
    
    constructor(vnode) {
        super()
    }
    
    view(vnode) {
        return m(".page", [
            m(".container", [
                m(".row", [
                    m(PageHeader),
                ]),
            ]),
            m(".container", [
                m(".row", [
                    m(".col-xs-12.col-sm-6.col-lg-3", [
                        m(CardUser),
                    ]),
                    m(".col-xs-12.col-sm-6.col-lg-3", [
                        m(CardUserStory),
                    ]),
                    m(".col-xs-12.col-sm-6.col-lg-3", [
                        m(CardComponent),
                    ]),
                    m(".col-xs-12.col-sm-6.col-lg-3", [
                        m(CardScenario),
                    ]),
                    m(".col-xs-12.col-sm-6.col-lg-3", [
                        m(CardLevel),
                    ]),
                    m(".col-xs-12.col-sm-6.col-lg-3", [
                        m(CardGameWorld),
                    ]),
                ]),
            ]),
            m(PageFooter),
        ])
    }
}