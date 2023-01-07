const express = require('express')
let  { createUser, deleteUser, updateUser, getUser,getAllUser} = require('../controllers/userController')

const router = express.Router()

router.post("/create", createUser)

router.get("/me", getUser)
router.get("/all", getAllUser)

router.route("/:id").put(updateUser).delete(deleteUser)

module.exports = router