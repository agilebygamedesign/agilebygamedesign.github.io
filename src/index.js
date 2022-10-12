import m from "mithril"

import { FirstLevel } from "./levels/first_level"
import { ActorDocPage } from "./docs/actor"
import { UserStoryDocPage } from "./docs/user_story"

/*
import { AboutPage } from "./pages/About"
import { ProjectsPage } from "./pages/Projects"
import { PartnershipPage } from "./pages/Partnership"
import { ContactPage } from "./pages/Contact"
import { ShopPage } from "./pages/Shop"
import { CartPage } from "./pages/Cart"
*/

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