import m from "mithril"

export class CardScenario {
    constructor(vnode) {}
    
    view(vnode) {
        return m(".card", {style: "margin-top: 5px; margin-bottom: 5px;"}, [
            m(".card-body", [
                m("h5.card-title", "Scenario"),
                m("p.card-text", "A User Story Scenario (or \"Scene\") is a set of Game World Components in which Actors interact with Game Entities."),
            ]),
        ])
    }
}