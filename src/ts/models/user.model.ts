import m from 'mithril'

export interface User {
	createdDate: Date
	userId: string
	email: string
	username: string
	birthDate: Date
}

const UserModel = {
	list: [] as User[],
	loadList() {
		return m.request<{data: User[]}>({
			method: "GET",
			url: "http://localhost:3000/users"
		})
		.then(result => {
			UserModel.list = result.data
		})
	},

	current: {} as User,
	load (username: string) {
		return m.request<User>({
			method: "GET",
			url: "http://localhost:3000/users/" + username
		})
		.then(result => {
			UserModel.current = result
		})
	},

	updatedUser: {} as any,
    update(username: string) {
        return m.request({
            method: "PATCH",
            url: "http://localhost:3000/users/" + username,
            data: UserModel.current
        }).then(result => {
			UserModel.updatedUser = result
		}).catch(err => {
			UserModel.updatedUser = err
		})
	},

	delete(username: string) {
		return m.request({
            method: "DELETE",
            url: "http://localhost:3000/users/" + username,
        }).then(result => {
			console.log('deleted user')
			console.log(result)
		}).catch(err => {
			console.log(err)
		})
	},

	new: {} as any,
	create(user: User) {
		return m.request({
			method: "POST",
			url: "http://localhost:3000/users",
			data: user
		}).then(result => {
			UserModel.new = result
		}).catch(err => {
			UserModel.new = err
		})
	}
}

type UserModel = typeof UserModel

export default UserModel
