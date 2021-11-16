const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: false,
      min: 3,
      max: 20
    },
    middlename: {
      type: String
    },
    lastname: {
      type: String,
      required: false,
      min: 3,
      max: 20
    },
    gender: {
      type: String,
      required: false
    },
    phone: {
      type: String,
      required: false
    },
    address: {
      type: String,
      required: false
    },
    username: {
      type: String,
      required: false,
      min: 3,
      max: 20,
      unique: false
    },
    email: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unque: true
    },
    password: {
      type: String,
      required: true
    },
    profilePicture: {
      type: String,
      default: ''
    },

    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('user', UserSchema)
