import m from "mithril"
import { FirstLevel } from "../levels/first_level"
import { ComponentScene } from "../scenes/component_scene"

export class CardComponent {
    constructor(vnode) {}
    view(vnode) {
        return m(".card", {style: "margin-top: 5px; margin-bottom: 5px;"}, [
            m(".card-body", {
                onclick: function() {
                    FirstLevel.scene_active = m(ComponentScene)
                },
            }, [
                m("h5.card-title", "Components"),
                m("p.card-text", "Components are a set of elements that make up the User Story Scenario whose purpose is to capture Actor interactions, receive and return data related to Game States at the current stage, and help Actors understand the objective of the Game."),
                m("p.card-text", "Coming soon"),
            ]),
        ])
    }
}
