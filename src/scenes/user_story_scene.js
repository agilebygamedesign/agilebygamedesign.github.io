import m from "mithril"
import { Scene } from "./scene";

export class UserStoryScene extends Scene {
    
    constructor(vnode) {
        super()
    }
    
    view(vnode) {
        return m(".container", [
            m(".row", [
                m(".col-12", [
                    m("h2", "User Story"),
                    m("p", "Coming Soon"),
                ]),
            ])
        ])
    }
}
