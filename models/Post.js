const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  newNote: {
    type: String,
    required: true,
  },
  newDate: {
    type: String, 
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Post', PostSchema)
