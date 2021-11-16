const router = require('express').Router()
const User = require('./../models/User')
const verify = require('../verifyToken')
const CryptoJS = require('crypto-js')

// PUT /api/users/id
router.put('/:id', verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString()
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).json(user)

    try {
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json('You can only update your account')
  }
})

// GET ALL USERS
router.get('/', verify, async (req, res) => {
  const query = req.query.newUsers

  if (req.user.isAdmin) {
    try {
      const users = query
        ? await User.find()
            .sort({ _id: -1 })
            .limit(5)
        : await User.find()
      const allUsers = users.map(user => {
        const { password, ...info } = user._doc
        return info
      })
      res.status(200).json(allUsers)
    } catch (err) {
      res.send(err)
    }
  } else {
    res.status(403).json('Permission denied')
  }
})

// DELETE USER
router.delete('/:id', verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id)
      res.status(200).json('User has been deleted')
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json('You can only delete your account')
  }
})

// GET USER
router.get('/find/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      return res.status(404).json('User not found')
    }
    const { password, updatedAt, ...others } = user._doc
    res.json(others)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/stats', async (req, res) => {
  const today = new Date()
  const lastYear = today.setFullYear(today.setFullYear() - 1)
  // const monthsArray = [
  //   'January',
  //   'February',
  //   'Match',
  //   'April',
  //   'May',
  //   'June',
  //   'July',
  //   'August',
  //   'September',
  //   'Octobar',
  //   'November',
  //   'December'
  // ]

  try {
    const data = await User.aggregate([
      { $project: { month: { $month: '$createdAt' } } },
      { $group: { _id: '$month', total: { $sum: 1 } } }
    ])

    res.status(201).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
