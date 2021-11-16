const router = require('express').Router()
const User = require('./../models/User')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

// POST api/users

router.post('/register', async (req, res) => {
  const newUser = new User({
    firstname: req.body.firstname,
    middlename: req.body.middlename,
    lastname: req.body.lastname,
    gender: req.body.gender,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    username: req.body.username,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString()
  })

  try {
    const user = await newUser.save()
    res.status(201).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/login', async (req, res) => {
  let email = req.body.email

  try {
    const user = await User.findOne({ email })
    !user && res.status(404).json('User not found')
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY)
    const oPassword = bytes.toString(CryptoJS.enc.Utf8)

    req.body.password !== oPassword && res.status(400).json('Wrong password')

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: '5d' }
    )

    const { password, ...info } = user._doc

    res.status(200).json({ ...info, accessToken })
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
