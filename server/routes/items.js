const router = require('express').Router()
const Item = require('../models/Item')
const verify = require('../verifyToken')

// Create
router.post('/', verify, async (req, res) => {
  if (req.user) {
    try {
      const newItem = new Item(req.body)
      const item = await newItem.save()
      res.status(201).json(item)
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json('You are allowed to create an Item')
  }
})

// Update
router.put('/:id', verify, async (req, res) => {
  if (req.user) {
    try {
      const item = await Item.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      )
      res.status(200).json(item)
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json('You are allowed to update this Item')
  }
})

// Delete
router.delete('/:id', verify, async (req, res) => {
  if (req.user) {
    try {
      const item = await Item.findByIdAndDelete(req.params.id)
      res.status(200).json('Item successfully deleted')
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json('You are allowed to delete this item')
  }
})

// gets
router.get('/', verify, async (req, res) => {
  try {
    const items = await Item.find()
    res.status(200).json(items.reverse())
  } catch (err) {
    res.status(500).json(err)
  }
})

// get
router.get('/find/:id', verify, async (req, res) => {
  try {
    const item = await Item.findById(req.params.id)
    res.status(200).json(item)
  } catch (err) {
    res.status(500).json(err)
  }
})

// get item by userId
router.get('/user_by_id', verify, async (req, res) => {
  let userId = req.query.id
  try {
    const item = await Item.find({ userId: userId })
    res.status(200).json(item)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Random
router.get('/random', verify, async (req, res) => {
  const type = req.query.type
  try {
    let movies

    if (type === 'series') {
      movies = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } }
      ])
    } else {
      movies = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } }
      ])
    }
    res.status(200).json(movies)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
