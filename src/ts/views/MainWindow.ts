import m from "mithril";

export default {
    view(vnode) {
        return m("div", { class: "main-window" },
            [
                m("nav", { class: "sidebar" },
                    [
                        m("div#sidebar-collapse-title", { class: "sidebar-header" },
                            [
                                m("h3", "Webdev FE based on Jiskerfet"),
                                m("strong", "Alice"),
                            ],
                        ),
                        m("ul", { class: "list-unstyled components" },
                            m("li", { class: "list-unstyled components" }, [
                                m("a", { href: "/", oncreate: m.route.link }, [
                                    m("i", { class: "fas fa-briefcase" }, "home"),
                                ]),
                                m("a", { href: "/users", oncreate: m.route.link }, [
                                    m("i", { class: "fas fa-briefcase" }, "users"),
                                ]),
                            ]),

                        ),
                    ],
                ),
                m("main",
                    m("div", { class: "container-fluid" }, [
                        m("nav", { class: "navbar navbar-expand-lg navbar-light bg-light mobile-only" }, [
                            m("div", { class: "container-fluid" },
                                m("button#sidebar-collapse", { class: "btn btn-info" }, [
                                    m("i", { class: "fas fa-align-left" }, ""),
                                    m("span", "toggle sidebar"),
                                ]),
                            ),
                        ]),
                        m("section", vnode.children),
                    ]),
                ),
            ],
        );
    },
} as m.Component;