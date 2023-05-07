const controller = require('../controller/controller')

const router = require('express').Router()

router.post('/saveUser',controller.postData)

module.exports = router