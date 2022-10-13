import m from "mithril"

import { FirstLevel } from "./levels/first_level"
import { CustomerPanelLevel } from "./levels/customer_panel_level"


var root = document.body

m.route(root, "/", {
    "/": FirstLevel,
    "/customers": CustomerPanelLevel
    
})