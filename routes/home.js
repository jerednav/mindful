const express = require('express')
const router = express.Router()
const postController = require('../controllers/post') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, postController.getNote)

router.post('/createNote', postController.createNote)

// router.post('/folder', postController.createFolder)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router
