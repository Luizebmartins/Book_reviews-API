const axios = require('axios')

const request = (url, method, data) => axios({
	url, method, data, validateStatus: false,
})

describe('Camada de testes', () => {
	test('should save a user', async () => {
		const data = {
			login: 'luizebmartins',
			password: 'secret',
			name: 'Luiz',
			email: 'luizebmartons@gmail.com',
		}

		const response = await request('http://localhost:3000/users', 'post', data)
		const user = response.data
		expect(user.email).toBe(data.email)
		expect(response.status).toBe(201)
	})

	test('should not save a user', async () => {
		const data = {
			login: 'luizebmartins',
			password: 'secret',
			name: 'Luiz',
			email: 'luizebmartons@gmail.com',
		}

		const response = await request('http://localhost:3000/users', 'post', data)
		const user = response.data
		expect(user.login).toBe(data.login)
		expect(response.status).toBe(409)
	})
})
