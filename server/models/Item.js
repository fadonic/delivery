const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },

    itemDescription: {
      type: String,
      max: 500
    },

    itemType: {
      type: String,
      max: 500
    },
    itemWeight: {
      type: String
    },

    pickUpLocation: {
      type: String,
      default: ''
    },
    deliveryAddress: {
      type: String,
      default: ''
    },

    contactPerson: {
      type: String,
      default: ''
    },

    contactPhone1: {
      type: String,
      default: ''
    },
    contactPhone2: {
      type: String,
      default: ''
    },
    deliveryStatus: {
      type: String,
      default: 'Pending'
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('item', ItemSchema)
