import m from "mithril";

export interface User {
	createdDate: Date;
	userId: string;
	email: string;
	username: string;
	birthDate: Date;
}

const UserModel = {
	list: [] as User[],
	loadList() {
		return m.request<{ data: User[] }>({
			method: "GET",
			url: "http://localhost:3000/users",
		})
			.then(result => {
				UserModel.list = result.data;
			});
	},

	current: {} as User,
	load(username: string) {
		return m.request<User>({
			method: "GET",
			url: "http://localhost:3000/users/" + username,
		})
			.then((result: any) => {
				UserModel.current = result.data;
			});
	},

	update(username: string) {
		return m.request({
			method: "PATCH",
			url: "http://localhost:3000/users/" + username,
			data: UserModel.current,
		}).then((result: any) => {
			UserModel.current = result.data;
		}).catch(err => {
			UserModel.current = err;
		});
	},

	delete(username: string) {
		return m.request({
			method: "DELETE",
			url: "http://localhost:3000/users/" + username,
		}).then(result => {
		}).catch(err => {
		});
	},

	new: {} as any,
	create(user: User) {
		return m.request({
			method: "POST",
			url: "http://localhost:3000/users",
			data: user,
		}).then(result => {
			return result;
		}).catch(err => {
			UserModel.new = err;
		});
	},
};

type UserModel = typeof UserModel;

export default UserModel;
