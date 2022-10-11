
import m from "mithril"

export class PageHeader {
    
    constructor(vnode) {}
    
    view(vnode) {
        return m("header.col-12.text-center", [
            m("h1.display-1", "Agile by Game Design"),
            m("p.lead", "Agile Software Development guided by Game Design"),
        ])
    }
}
