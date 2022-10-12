import m from "mithril"

import { FirstLevel } from "./levels/first_level"
import { CustomerPanelLevel } from "./levels/customer_panel_level"
import { ActorDocPage } from "./docs/actor"
import { UserStoryDocPage } from "./docs/user_story"


var root = document.body

m.route(root, "/", {
    "/": FirstLevel,
    "/customer": CustomerPanelLevel,
    "/docs/actors": ActorDocPage,
    "/docs/user-stories": UserStoryDocPage
    
})