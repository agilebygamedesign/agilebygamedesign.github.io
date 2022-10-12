import m from "mithril"

export class CardUser {
    constructor(vnode) {}
    view(vnode) {
        return m(".card", {style: "margin-top: 5px; margin-bottom: 5px;"}, [
            m(".card-body", [
                m("h5.card-title", [
                    m("a", {href: "#!/docs/actors", target: "_blank"}, "User or Actor"),
                ]),
                m("p.card-text", "Users are Actors in Game Play"),
            ]),
        ])
    }
}

