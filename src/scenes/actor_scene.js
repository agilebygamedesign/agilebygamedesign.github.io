import m from "mithril"
import { Scene } from "./scene"
import { FirstLevel } from "../levels/first_level"
import { HallScene } from "./hall_scene"

export class ActorScene extends Scene {
    
    constructor(vnode) {
        super()
    }
    
    view(vnode) {
        return m(".container", [
            m(".row", [
                m("nav.breadcrumb", [
                    m("o.breadcrumb", [
                        m("li.breadcrumb-item", [
                            m("a", {
                                href: "#",
                                onclick: function() {
                                    FirstLevel.scene_active = m(HallScene)
                                }
                            }, "Home")
                        ]),
                        m("li.breadcrumb-item.active", [
                            m("a", {
                                "data-bs-toggle": "tooltip",
                                "data-bs-title": "You are here."
                            }, "User or Actor"),
                        ]),
                    ]),
                ]),
            ]),
            m(".row", [
                m(".col-12", [
                    m("h2", "User or Actor"),
                    m("img", {src: "static/images/actors/actors_example.png", width: "90%", height: "90%", style: "display: block; margin: 0 auto;"}),
                    //m("p", "Coming Soon"),
                ]),
            ]),
        ])
    }
}
