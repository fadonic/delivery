const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: false,
      min: 3,
      max: 20,
      unique: false
    },
    desc: {
      type: String
    },
    img: {
      type: String
    },
    imgTitle: {
      type: String
    },
    imgSm: {
      type: String
    },

    trailer: {
      type: String
    },

    video: {
      type: String
    },

    year: {
      type: String
    },

    limit: {
      type: Number
    },

    genre: {
      type: String
    },

    isSeries: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('movie', MovieSchema)
