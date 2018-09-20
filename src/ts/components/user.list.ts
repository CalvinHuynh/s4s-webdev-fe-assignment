import m from 'mithril'
import UserModel from '../models/user.model'

export default {
	oninit: UserModel.loadList,
	view() {
		return m("div",
			m("a.item", { href: "/users/create", oncreate: m.route.link }, `Create a new user`),
			m(".user-list",
				UserModel.list.map(user =>
					m(".user-list-item",
						m("a.item",
							{ href: "/users/" + user.username + "/edit", oncreate: m.route.link },
							`${user.userId} ${user.username} ${user.email}`
						)
					)
				)
			))
	}
} as m.Component
