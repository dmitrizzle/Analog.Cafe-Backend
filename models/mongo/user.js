const mongoose = require('mongoose')
const connection = require('./index.js')

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    id: String,
    title: String,
    image: String,
    text: String,
    twitterId: String,
    role: { type: String, default: 'member' },
    buttons: [
      {
        to: String,
        text: String,
        red: Boolean
      }
    ]
  },
  {
    timestamps: true
  }
)

const User = connection.model('User', userSchema)

module.exports = User
