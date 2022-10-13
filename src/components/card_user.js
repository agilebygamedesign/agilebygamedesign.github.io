import m from "mithril"
import { FirstLevel } from "../levels/first_level"
import { ActorScene } from "../scenes/actor_scene"

export class CardUser {
    constructor(vnode) {}
    view(vnode) {
        return m(".card", {style: "margin-top: 5px; margin-bottom: 5px;"}, [
            m(".card-body", {
                onclick: function() {
                    FirstLevel.scene_active = m(ActorScene)
                }
            }, [
                m("h5.card-title", "User or Actor"),
                m("p.card-text", "Users are Actors ou Players in Game World"),
            ]),
        ])
    }
}

