import m from 'mithril'

export default {
    view() {
        return m("div", { class: "box" },
            m("p", {class: "text animated pulse"}, "Hello World!")
        )
    }
} as m.Component