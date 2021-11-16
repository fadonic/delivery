const router = require('express').Router()
const List = require('./../models/List')
const verify = require('../verifyToken')
const { aggregate } = require('./../models/List')

// Create
router.post('/', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const newList = new List(req.body)
      const list = await newList.save()
      res.status(201).json(list)
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json('You are allowed to create a list')
  }
})

// Update
router.put('/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const list = await List.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).json(list)
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json('You are allowed to update a list')
  }
})

// Delete
router.delete('/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const list = await List.findByIdAndDelete(req.params.id)
      res.status(200).json('list successfully deleted')
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json('You are allowed to delete a list')
  }
})

// gets
router.get('/', verify, async (req, res) => {
  const typeQuery = req.query.type
  const genreQuery = req.query.genre
  let list = []

  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } }
        ])
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } }
        ])
      }
    } else if (genreQuery) {
      list = await List.aggregate([
        { $sample: { size: 10 } },
        { $match: { genre: genreQuery } }
      ])
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }])
    }
    res.status(200).json(list)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
