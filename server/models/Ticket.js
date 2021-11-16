const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TicketSchema = new Schema(
  {
    type: {
      type: String,
      max: 500
    },
    ticketId: {
      type: String
    },
    title: {
      type: String,
      max: 500
    },
    message: {
      type: String,
      max: 500
    },
    status: {
      type: String,
      max: 500,
      default: 'open'
    },
    fileName: {
      type: String
    },
    userId: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('ticket', TicketSchema)
