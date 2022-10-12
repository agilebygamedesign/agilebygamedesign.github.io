import m from "mithril"

import { FirstLevel } from "./levels/first_level"
import { ActorDocPage } from "./docs/actor"
import { UserStoryDocPage } from "./docs/user_story"


var root = document.body

m.route(root, "/", {
    "/": FirstLevel,
    "/docs/actors": ActorDocPage,
    "/docs/user-stories": UserStoryDocPage,
    /*
    "/p/about": AboutPage,
    "/projects": ProjectsPage,
    "/shop": ShopPage,
    "/cart": CartPage,
    "/partnership": PartnershipPage,
    "/p/contact": ContactPage,
    */
})