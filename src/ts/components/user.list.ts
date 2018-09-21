import m from "mithril";
import UserModel from "../models/user.model";

function sorts(list: any) {
	return {
		onclick(e: any) {
			const prop = e.target.getAttribute("data-sort-by");
			if (prop) {
				const first = list[0];
				list.sort(() => (a: any, b: any) => {
					return a[prop] > b[prop] ? 1 : a[prop] < b[prop] ? -1 : 0;
				});
				if (first === list[0]) list.reverse();
			}
		},
	};
}

export default {
	oninit: UserModel.loadList,
	view() {
		return m("div", { style: "padding-left: 1em" },
			m("a.item", { href: "/users/create", oncreate: m.route.link }, `Create a new user`),
			m("table", sorts(UserModel.list), [
				m("tr", [
					m("th[data-sort-by=userId]", "Id"),
					m("th[data-sort-by=username]", "Username"),
				]),
				// tslint:disable-next-line:only-arrow-functions
				UserModel.list.map(function(user) {
					return m("tr", [
						m("td", user.userId),
						m("td", user.username),
						m("td",
							m("a",
								{ href: "/users/" + user.username + "/edit", oncreate: m.route.link },
								m("button", "Edit"),
							),
						),
					]);
				}),
			]),
		);
	},
} as m.Component;