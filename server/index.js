const express = require('express')
const dotenv = require('dotenv')

const routes = require('./routes')

dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`App running at http://localhost:${port}`))