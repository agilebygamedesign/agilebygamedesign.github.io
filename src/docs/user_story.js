
import m from "mithril"
import { PageHeader } from "../components/page_header"

export class UserStoryDocPage {
    
    constructor(vnode) {}
    
    view(vnode) {
        return m(".page", [
            m(".container", [
                m(".row", [
                    m(PageHeader),
                ]),
            ]),
            m(".container", [
                m(".row", [
                    m(".col-12", [
                        m("h2", "User Story"),
                        m("p", "Coming Soon"),
                    ]),
                ])
            ]),
        ])
    }
}
