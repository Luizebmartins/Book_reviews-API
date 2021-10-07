const axios = require('axios')
const userData = require('../data/userData')

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
		await userData.deleteUser(user.id)
	})

	test('should not save a duplicate user', async () => {
		const data = {
			password: 'secret',
			name: 'Luiz',
			email: 'luizebmartons@gmail.com',
		}
		const response1 = await request('http://localhost:3000/users', 'post', data)
		const response2 = await request('http://localhost:3000/users', 'post', data)
		const user = response1.data

		expect(response2.status).toBe(409)
		await userData.deleteUser(user.id)
	})
})
