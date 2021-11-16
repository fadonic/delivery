const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    ticket: {
      type: Schema.Types.ObjectId,
      ref: 'ticket'
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('message', MessageSchema)
