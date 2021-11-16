const router = require('express').Router()
const Message = require('../models/Message')
const Ticket = require('../models/Ticket')
const verify = require('../verifyToken')

router.post('/:ticketId', verify, async (req, res) => {
  if (req.user) {
    console.log(req.user)
    try {
      const ticket = await Ticket.findById(req.params.ticketId)
      if (!ticket) {
        throw new Error('Ticket not found!')
      }
      const newMessage = new Message(req.body)
      newMessage.ticket = req.params.ticketId
      newMessage.sender = req.user.id
      const message = await newMessage.save()
      const messageData = await Message.findById(message._id)
        .populate('sender')
        .populate('ticket')

      res.status(201).json(messageData)
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json('You are not allowed to create a message')
  }
})

// gets
router.get('/', verify, async (req, res) => {
  try {
    const messages = await Message.find()
    res.status(200).json(messages.reverse())
  } catch (err) {
    res.status(500).json(err)
  }
})

// get
router.get('/find/:ticketId', verify, async (req, res) => {
  try {
    const messages = await Message.find({
      ticket: req.params.ticketId
    })
      .sort({ createdAt: -1 })
      .populate('sender')
      .populate('ticket')

    res.status(200).json(messages)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
