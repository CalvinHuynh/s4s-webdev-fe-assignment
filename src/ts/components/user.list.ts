import m from 'mithril'
import UserModel from '../models/user.model'

function sorts(list: any) {
	return {
		onclick: function (e: any) {
			var prop = e.target.getAttribute("data-sort-by")
			if (prop) {
				var first = list[0]
				list.sort(function (a: any, b: any) {
					return a[prop] > b[prop] ? 1 : a[prop] < b[prop] ? -1 : 0
				})
				if (first === list[0]) list.reverse()
			}
		}
	}
}

export default {
	oninit: UserModel.loadList,
	view() {
		return m("div",
			m("a.item", { href: "/users/create", oncreate: m.route.link }, `Create a new user`),
			m("table", sorts(UserModel.list), [
				m("tr", [
					m("th[data-sort-by=userId]", "Id"),
					m("th[data-sort-by=username]", "Username")
				]),
				UserModel.list.map(function (user) {
					return m("tr", [
						m("td", user.userId),
						m("td", user.username),
						m("td",
							m("a.item",
								{ href: "/users/" + user.username + "/edit", oncreate: m.route.link },
								`Edit`))
					])
				})
			]),
		)
	}
} as m.Component
