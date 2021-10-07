const axios = require('axios')
const userService = require('../service/userService')

const request = (url, method, data) => axios({
	url, method, data, validateStatus: false,
})

describe('Camada de testes', () => {
	test('should save a user', async () => {
		const data = {
			password: 'secret',
			name: 'Luiz',
			email: 'luizebmartons@gmail.com',
		}
		const response = await request('http://localhost:3000/users', 'post', data)
		const user = response.data
		expect(user.email).toBe(data.email)
		expect(response.status).toBe(201)
		await userService.deleteUser(user.id)
	})

	test('should not save a duplicate user', async () => {
		const data = {
			password: 'secret',
			name: 'Luiz',
			email: 'luizebmartins@gmail.com',
		}
		const response1 = await request('http://localhost:3000/users', 'post', data)
		const response2 = await request('http://localhost:3000/users', 'post', data)
		const user = response1.data

		expect(response2.status).toBe(409)
		await userService.deleteUser(user.id)
	})

	test('should get a user', async () => {
		const data = {
			password: 'secret',
			name: 'Luiz',
			email: 'luizebmartins@gmail.com',
		}
		const response1 = await request('http://localhost:3000/users', 'post', data)
		const newUser = response1.data

		const response2 = await request(`http://localhost:3000/users/${newUser.id}`, 'get')
		const user = response2.data
		expect(user.email).toBe(data.email)
		expect(response2.status).toBe(200)
		await userService.deleteUser(user.id)
	})

	test('should not get a user', async () => {
		const data = {
			id: 1000,
		}
		const response = await request(`http://localhost:3000/users/${data.id}`, 'get')

		expect(response.status).toBe(204)
	})

	test('should update a user', async () => {
		const data = {
			password: 'secret',
			name: 'Luiz',
			email: 'luizebmartins@gmail.com',
		}

		const response1 = await request('http://localhost:3000/users', 'post', data)
		const userID = response1.data.id

		data.name = 'luiz eduardo'
		data.email = 'emailteste@gmail.com'
		const response2 = await request(`http://localhost:3000/users/${userID}`, 'put', data)

		const response3 = await request(`http://localhost:3000/users/${userID}`, 'get')
		const updatedUser = response3.data

		expect(updatedUser.name).toBe(data.name)
		expect(updatedUser.email).toBe(data.email)
		expect(response2.status).toBe(200)

		await userService.deleteUser(userID)
	})

	test('should not update a user', async () => {
		const data = {
			name: 'teste',
		}

		const idUser = 10000
		const response = await request(`http://localhost:3000/users/${idUser}`, 'put', data)

		expect(response.status).toBe(204)
	})

	test('should not update a user with conflicting email', async () => {
		jest.setTimeout(10000)
		const data1 = {
			password: 'secret',
			name: 'Luiz',
			email: 'luizebmartins@gmail.com',
		}
		const data2 = {
			password: 'secret',
			name: 'carlos',
			email: 'teste@gmail.com',
		}

		const response1 = await request('http://localhost:3000/users', 'post', data1)
		const userID1 = response1.data.id

		const response2 = await request('http://localhost:3000/users', 'post', data2)
		const userID2 = response2.data.id

		data2.email = 'luizebmartins@gmail.com'
		const response3 = await request(`http://localhost:3000/users/${userID2}`, 'put', data2)
		expect(response3.status).toBe(409)

		await userService.deleteUser(userID1)
		await userService.deleteUser(userID2)
	})
})
