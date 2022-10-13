import m from "mithril"

import { FirstLevel } from "../levels/first_level"
import { LevelScene } from "../scenes/level_scene"

export class CardLevel {
    
    constructor(vnode) {}

    view(vnode) {
        return m(".card", {style: "margin-top: 5px; margin-bottom: 5px;"}, [
            m(".card-body", {
                onclick: function() {
                    FirstLevel.scene_active = m(LevelScene)
                }
            }, [
                m("h5.card-title", "Level"),
                m("p.card-text", "Coming soon"),
            ]),
        ])
    }
}
