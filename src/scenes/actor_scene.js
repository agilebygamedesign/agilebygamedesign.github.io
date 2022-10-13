import m from "mithril"
import { Scene } from "./scene";

export class ActorScene extends Scene {
    
    constructor(vnode) {
        super()
    }
    
    view(vnode) {
        return m(".container", [
            m(".row", [
                m(".col-12", [
                    m("h2", "User or Actor"),
                    m("img", {src: "static/images/actors/actors_example.png", width: "90%", height: "90%", style: "display: block; margin: 0 auto;"}),
                    m("p", "Coming Soon"),
                ]),
            ])
        ])
    }
}
