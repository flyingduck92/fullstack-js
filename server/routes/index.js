const apiRoutes = require('express').Router()
const itemRoutes = require('./item')

const apiBased = 'api'

apiRoutes.get(`/${apiBased}`, (req, res) => res.json('Hello from API Routes /'))

apiRoutes.use(`/${apiBased}/items`, itemRoutes)

module.exports = apiRoutes
