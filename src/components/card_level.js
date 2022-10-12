import m from "mithril"

export class CardLevel {
    
    constructor(vnode) {}

    view(vnode) {
        return m(".card", {style: "margin-top: 5px; margin-bottom: 5px;"}, [
            m(".card-body", [
                m("h5.card-title", "Level"),
                m("p.card-text", "Coming soon"),
            ]),
        ])
    }
}
