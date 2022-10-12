import m from "mithril"


export class CardUserStory {
    view(vnode) {
        return m(".card", {style: "margin-top: 5px; margin-bottom: 5px;"}, [
            m(".card-body", [
                m("h5.card-title", [
                    m("a", {href: "#!/docs/user-stories", target: "_blank"}, "User Story"),
                ]),
                m("p.card-text", "User Story is an Actor skill"),
            ]),
        ])
    }
}
