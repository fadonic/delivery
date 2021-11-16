const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const mongan = require('morgan')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const multer = require('multer')

dotenv.config({ debug: process.env.DEBUG })

const dbcon = (async () => {
  try {
    const resonse = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    console.log('connected to db')
  } catch (err) {
    console.log('connection error')
  }
})()

const app = express()
app.use(cors())

app.use('/images', express.static(path.join(__dirname, 'public/images')))

// middlewares
//app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())
app.use(morgan('common'))

const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const ticketsRoute = require('./routes/tickets')
const itemsRoute = require('./routes/items')
const messageRoute = require('./routes/message')

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/tickets', ticketsRoute)
app.use('/api/items', itemsRoute)
app.use('/api/message', messageRoute)

app.get('/', (req, res) => {
  res.json('Welcome to Home Page welcome to home page ')
})

app.listen(8800, () => {
  console.log('Backend Server is running on port 8800!')
})

// const issue2options = {
//   origin: true,
//   methods: ['PATCH'],
//   credentials: true,
//   maxAge: 3600
// }
// app.options('/complex-cors', cors(issue2options))
// app.patch('/complex-cors', cors(issue2options), (req, res) => {
//   console.info('DELETE /complex-cors')
//   res.json({
//     text: 'Complex CORS requests are working. [DELETE]'
//   })
// })

// app.options('/issue-2', cors(issue2options))
// app.post('/issue-2', cors(issue2options), (req, res) => {
//   console.info('POST /issue-2')
//   res.json({
//     text: 'Issue #2 is fixed.'
//   })
// })
