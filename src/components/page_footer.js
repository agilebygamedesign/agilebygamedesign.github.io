import m from "mithril"

export class PageFooter {
    constructor(vnode){}
    view(vnode) {
        return m(".container", [
            m(".row", [
                m(".col-12", [
                    m("p", "All rights reserved to AGD")
                ]),
            ]),
        ])
    }
}
