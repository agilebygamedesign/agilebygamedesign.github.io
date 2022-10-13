import m from "mithril"
import { Scene } from "./scene"
import { FirstLevel } from "../levels/first_level"
import { HallScene } from "./hall_scene"

export class UserStoryScene extends Scene {
    
    constructor(vnode) {
        super()
    }
    
    view(vnode) {
        return m(".container", [
            m(".row", [
                m("nav.breadcrumb", [
                    m("o.breadcrumb", [
                        m("li.breadcrumb-item", [
                            m("a", {
                                href: "#",
                                onclick: function() {
                                    FirstLevel.scene_active = m(HallScene)
                                }
                            }, "Home")
                        ]),
                        m("li.breadcrumb-item.active", [
                            m("a", {
                                "data-bs-toggle": "tooltip",
                                "data-bs-title": "You are here."
                            }, "User Stories"),
                        ]),
                    ]),
                ]),
            ]),
            m(".row", [
                m(".col-12", [
                    m("h2", "User Story"),
                    m("p", "Em um projeto de desenvolvimento ágil os requisitos são descritos no formato de Histórias dos Usuários."),
                    m("p", "Ela é uma explicação informal e geral sobre um recurso de software escrita a partir da perspectiva do usuário final ou cliente."),
                    m("p", "A História de Usuário é representada por cartões (Cards), como no exemplo a seguir:"),
                    m("img", {src: "static/images/userstories/storycards.webp", width: "400px", height: "250px", style: "display: block; margin: 0 auto;"}),
                    m("p.display-5", "Como um \"Usuário\", eu quero [executar uma ação] para obter [certo benefício]."),
                ]),
            ])
        ])
    }
}
