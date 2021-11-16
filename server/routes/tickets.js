const router = require('express').Router()
const Ticket = require('../models/Ticket')
const Message = require('../models/Message')
const verify = require('../verifyToken')
const multer = require('multer')

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    // console.log('yy', req.body.name)
    cb(null, file.originalname)
  }
})

// Create
const upload = multer({ storage })

router.post('/upload', upload.single('file'), (req, res) => {
  try {
    res.status(200).json(req.file)
  } catch (err) {
    console.log(err)
  }
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})

router.post('/', verify, async (req, res) => {
  if (req.user) {
    try {
      const newTicket = new Ticket(req.body)
      newTicket.ticketId = Math.round(Math.random() * 1000000)
      console.log('myNew', newTicket)
      const ticket = await newTicket.save()
      if (ticket) {
        const newMessage = {
          title: ticket.title,
          message: ticket.message,
          ticket: ticket._id,
          sender: ticket.userId
        }
        const message = new Message(newMessage)
        await message.save()
      }

      res.status(201).json(ticket)
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json('You are allowed to create an ticket')
  }
})

// Update
router.patch('/:id', verify, async (req, res) => {
  if (req.user) {
    try {
      const ticket = await Ticket.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      )
      res.status(200).json(ticket)
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json('You are allowed to update this ticket')
  }
})

// Delete
router.delete('/:id', verify, async (req, res) => {
  if (req.user) {
    try {
      const ticket = await Ticket.findByIdAndDelete(req.params.id)
      res.status(200).json('ticket successfully deleted')
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json('You are allowed to delete this ticket')
  }
})

// gets
router.get('/', verify, async (req, res) => {
  try {
    const tickets = await Ticket.find()
    res.status(200).json(tickets.reverse())
  } catch (err) {
    res.status(500).json(err)
  }
})

// get
router.get('/find/:id', verify, async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id)
    res.status(200).json(ticket)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
