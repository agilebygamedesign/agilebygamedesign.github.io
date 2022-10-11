import m from "mithril"

export class HomePage {
    
    constructor(vnode) {}
    
    view(vnode) {
        return m(".page", [
            m(".container", [
                m(".row", [
                    m(".col-12.text-center", [
                        m("h1.display-1", "Agile by Game Design"),
                        m("p.lead", "Agile Software Development guided by Game Design"),
                        m("p.small", [
                            "proposed by ",
                            m("a", {href: "https://felipebastosweb.github.io", target: "_blank"}, "Felipe Augusto Bastos Moraes(@felipebastosweb)"),
                            "."
                        ]),
                    ]),
                ]),
                m(".row", [
                    m(".col-xs-12.col-sm-6.col-lg-3", [
                        m(".card", {style: "margin-top: 5px; margin-bottom: 5px;"}, [
                            m(".card-body", [
                                m("h5.card-title", "User or Actor"),
                                m("p.card-text", "Users are Actores in Game Play"),
                            ]),
                        ]),
                    ]),
                    m(".col-xs-12.col-sm-6.col-lg-3", [
                        m(".card", {style: "margin-top: 5px; margin-bottom: 5px;"}, [
                            m(".card-body", [
                                m("h5.card-title", "User Story"),
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
                                m("p.card-text", ""),
                            ]),
                        ]),
                    ]),
                    m(".col-xs-12.col-sm-6.col-lg-3", [
                        m(".card", {style: "margin-top: 5px; margin-bottom: 5px;"}, [
                            m(".card-body", [
                                m("h5.card-title", "Game as World Game"),
                                m("p.card-text", ""),
                            ]),
                        ]),
                    ]),
                ]),
            ]),
        ])
    }
}