const express = require('express')

const app = express()

app.use(express.json())
app.use('/', require('./routes/userRoutes'))

app.use((error, req, res, next) => {
	if (error.message === 'User already exist') return res.status(409).send(error.message)
	if (error.message === 'User not found') return res.status(404).json(error.message)
	if (error.message === 'Email already exist') return res.status(409).send(error.message)
	if (error.message === 'Autheticated failed') return res.status(401).send(error.message)
	return res.status(500).send(error.message)
})

app.listen(3000)
