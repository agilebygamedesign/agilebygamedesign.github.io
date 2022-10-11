
import m from "mithril"

export class ActorDocPage {
    
    constructor(vnode) {}
    
    view(vnode) {
        return m(".page", [
            m(".container", [
                m(".row", [
                    m(".col-12.text-center", [
                        m("h1.display-1", "Agile by Game Design"),
                    ]),
                    m(".col-12", [
                        m("h2", "User or Actor"),
                        m("p", "Coming Soon"),
                    ]),
                ])
            ]),
        ])
    }
}
