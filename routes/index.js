const express = require('express')
const router = express.Router()

const treeRoutes = require('./tree.routes.js')

router.use('/tree', treeRoutes)

module.exports = router
