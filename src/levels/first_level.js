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

/**
 * First Level class
 * */
export class FirstLevel extends Level {
    
    constructor(vnode) {}
    
    view(vnode) {
        return m(".page", [
            m(".container", [
                m(PageHeader),
                m(".row", [
                    m(".col-xs-12.col-sm-6.col-lg-3", [
                        m(CardUser)
                    ]),
                    
                    m(".col-xs-12.col-sm-6.col-lg-3", [
                        m(CardUserStory)
                    ]),
                    m(".col-xs-12.col-sm-6.col-lg-3", [
                        m(".card", {style: "margin-top: 5px; margin-bottom: 5px;"}, [
                            m(".card-body", [
                                m("h5.card-title", "Features"),
                                m("p.card-text", "Scene is a small Feature"),
                            ]),
                        ]),
                    ]),
                    m(".col-xs-12.col-sm-6.col-lg-3", [
                        m(CardLevel)
                    ]),
                    m(".col-xs-12.col-sm-6.col-lg-3", [
                        m(".card", {style: "margin-top: 5px; margin-bottom: 5px;"}, [
                            m(".card-body", [
                                m("h5.card-title", "Game as World Game"),
                                m("p.card-text", "Coming soon"),
                            ]),
                        ]),
                    ]),
                ]),
            ]),
            m(PageFooter),
        ])
    }
}