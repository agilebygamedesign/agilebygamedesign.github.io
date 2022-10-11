import m from "mithril"
import { PageHeader } from "../components/page_header"

export class HomePage {
    
    constructor(vnode) {}
    
    view(vnode) {
        return m(".page", [
            m(".container", [
                m(PageHeader),
                m(".row", [
                    m(".col-xs-12.col-sm-6.col-lg-3", [
                        m(".card", {style: "margin-top: 5px; margin-bottom: 5px;"}, [
                            m(".card-body", [
                                m("h5.card-title", [
                                    m("a", {href: "#!/docs/actors", target: "_blank"}, "User or Actor"),
                                ]),
                                m("p.card-text", "Users are Actors in Game Play"),
                            ]),
                        ]),
                    ]),
                    m(".col-xs-12.col-sm-6.col-lg-3", [
                        m(".card", {style: "margin-top: 5px; margin-bottom: 5px;"}, [
                            m(".card-body", [
                                m("h5.card-title", [
                                    m("a", {href: "#!/docs/user-stories", target: "_blank"}, "User Story"),
                                ]),
                                m("p.card-text", "User Story is an Actor skill"),
                            ]),
                        ]),
                    ]),
                    m(".col-xs-12.col-sm-6.col-lg-3", [
                        m(".card", {style: "margin-top: 5px; margin-bottom: 5px;"}, [
                            m(".card-body", [
                                m("h5.card-title", "Features"),
                                m("p.card-text", "Scene is a small Feature"),
                            ]),
                        ]),
                    ]),
                    m(".col-xs-12.col-sm-6.col-lg-3", [
                        m(".card", {style: "margin-top: 5px; margin-bottom: 5px;"}, [
                            m(".card-body", [
                                m("h5.card-title", "Level"),
                                m("p.card-text", "Coming soon"),
                            ]),
                        ]),
                    ]),
                    m(".col-xs-12.col-sm-6.col-lg-3", [
                        m(".card", {style: "margin-top: 5px; margin-bottom: 5px;"}, [
                            m(".card-body", [
                                m("h5.card-title", "Game as World Game"),
                                m("p.card-text", "Coming soon"),
                            ]),
                        ]),
                    ]),
                ]),
            ]),
            m(".container", [
                m(".row", [
                    m(".col-12", [
                        m("p.small.text-center", [
                            "proposed by ",
                            m("a", {href: "https://felipebastosweb.github.io", target: "_blank"}, "Felipe Augusto Bastos Moraes(@felipebastosweb)"),
                            "."
                        ]),
                    ]),
                ]),
            ]),
        ])
    }
}