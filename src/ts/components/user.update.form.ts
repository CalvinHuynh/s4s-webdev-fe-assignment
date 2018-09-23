import m from "mithril";
import UserModel from "../models/user.model";

export interface Attrs {
	id: string;
}

export default {
	oninit(vnode) {
		UserModel.load(vnode.attrs.id);
	},

	view() {
		return m("form.user-form",
			{
				onsubmit: (e: Event) => {
					e.preventDefault();
					UserModel.update(UserModel.current.username).then(res => {
						alert("Updated user " + UserModel.current.username);
					});
				},
			},
			[
				m("div",
					m("label.label", "Username"),
					m("input.input[type=text][placeholder=Username][disabled]", {
						oninput: m.withAttr("value", value => {
							UserModel.current.username = value;
						}),
						value: UserModel.current.username,
					}),
				),
				m("div",
					m("label.label", "Email"),
					m("input.input[type=text][placeholder=Email]", {
						oninput: m.withAttr("value", value => {
							UserModel.current.email = value;
						}),
						value: UserModel.current.email,
					}),
				),
				m("div",
					m("label.label", "Date of birth"),
					m("input.input[placeholder=Date of birth]", {
						oninput: m.withAttr("value", value => {
							UserModel.current.birthDate = value;
						}),
						value: UserModel.current.birthDate,
					}),
				),
				m("div",
					m("div",
						m("button.button[type=submit]", "Save"),
					),
				),
			],
		);
	},
} as m.Component<Attrs>;