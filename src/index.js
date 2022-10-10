import m from "mithril"

var root = document.body

import { HomePage } from "./pages/Home"

/*
import { AboutPage } from "./pages/About"
import { ProjectsPage } from "./pages/Projects"
import { PartnershipPage } from "./pages/Partnership"
import { ContactPage } from "./pages/Contact"
import { ShopPage } from "./pages/Shop"
import { CartPage } from "./pages/Cart"
*/


m.route(root, "/", {
    "/": HomePage,
    /*
    "/p/about": AboutPage,
    "/projects": ProjectsPage,
    "/shop": ShopPage,
    "/cart": CartPage,
    "/partnership": PartnershipPage,
    "/p/contact": ContactPage,
    */
})