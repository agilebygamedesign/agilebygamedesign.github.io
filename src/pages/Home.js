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
            ]),
        ])
    }
}