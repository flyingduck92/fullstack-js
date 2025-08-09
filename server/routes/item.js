const itemRoutes = require('express').Router()

itemRoutes.get('/', (req, res) => res.json('hello from item Routes /'))

module.exports = itemRoutes