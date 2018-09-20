import m from "mithril";
import UserModel from "../models/user.model";

export interface Attrs {
	id: string;
}

export default {

	view() {
		return m("form.user-form",
			{
				onsubmit: (e: Event) => {
					e.preventDefault();
					UserModel.create(UserModel.new);
				},
			},
			[
				m("div",
					m("label.label", "Username"),
					m("input.input[type=text][placeholder=Username][required]", {
						oninput: m.withAttr("value", value => {
							UserModel.new.username = value;
						}),
					}),
				),
				m("div",
					m("label.label", "Email"),
					m("input.input[type=text][placeholder=Email][required]", {
						oninput: m.withAttr("value", value => {
							UserModel.new.email = value;
						}),
					}),
				),
				m("div",
					m("label.label", "Date of birth"),
					m("input.input[placeholder=yyyy-mm-dd format][required]", {
						oninput: m.withAttr("value", value => {
							UserModel.new.birthDate = value;
						}),
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