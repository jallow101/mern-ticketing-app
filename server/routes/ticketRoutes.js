const express = require('express')
let  {createUser} = require('../controllers/userController')

const router = express.Router()

router.post("/create", createUser)

module.exports = router