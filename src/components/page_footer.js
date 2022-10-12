import m from "mithril"

export class PageFooter {
    constructor(vnode){}
    view(vnode) {
        return m(".container", [
            m(".row", [
                m(".col-12", [
                    m("p.small.text-center", [
                        "proposed by ",
                        m("a", {href: "https://felipebastosweb.github.io", target: "_blank"}, "Felipe Augusto Bastos Moraes(@felipebastosweb)"),
                        "."
                    ]),
                ]),
            ]),
        ])
    }
}
