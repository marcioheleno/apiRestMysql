const db = require('../services/mysql')

const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('Enjoy the silence!')
    next()
  })

  server.get('usuario', async (req, res, next) => {
    // console.log(db.usuarios())
    try {
      res.send(
        await db.usuarios().all()
      )
      next()
    } catch (error) {
      res.send(error)
      next()
    }
  })

  server.post('usuario', (req, res, next) => {
    console.log(req)
    const { name } = req.params
    res.send(name)
    next()
  })

// server.put('usuario', (req, res, next) => {
//   res.send()
//   next()
// })

// server.delete(('usuario', (req, res, next) => {
//   res.send()
//   next()
// })

// server.header()
}
module.exports = routes
