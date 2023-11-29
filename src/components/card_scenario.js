import m from "mithril"

import { FirstLevel } from "../levels/first_level"
import { ScenarioScene } from "../scenes/scenario_scene"

export class CardScenario {
    constructor(vnode) {}
    
    view(vnode) {
        return m(".card", {style: "margin-top: 5px; margin-bottom: 5px;"}, [
            m(".card-body", {
                    onclick: function() {
                        FirstLevel.scene_active = m(ScenarioScene)
                    }
                }, [
                m("h5.card-title", "Scenario"),
                m("p.card-text", "A User Story Scenario (or \"Scene\") is a set of Rules and Game World Components in which Actors interact with other Game Entities in order to achieve a specific goal.
​"),
                m("p.card-text", "Coming soon"),
            ]),
        ])
    }
}
