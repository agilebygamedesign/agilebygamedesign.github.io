import m from "mithril"
import { FirstLevel } from "../levels/first_level"
import { UserStoryScene } from "../scenes/user_story_scene"


export class CardUserStory {
    view(vnode) {
        return m(".card", {style: "margin-top: 5px; margin-bottom: 5px;"}, [
            m(".card-body", {
                onclick: function() {
                    FirstLevel.scene_active = m(UserStoryScene)
                }
            }, [
                m("h5.card-title", "User Story"),
                m("p.card-text", "User Stories describe how the Actor uses his abilities in part of the Game Scenario"),
            ]),
        ])
    }
}
