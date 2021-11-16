const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const authHeader = req.headers.token
  if (authHeader) {
    const token = authHeader.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        res.status(403).json('Invalid token')
      } else {
        req.user = user
        next()
      }
    })
  } else {
    return res.status(401).json('Not Authenticated')
  }
}
