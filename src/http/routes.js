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

  server.post('usuario', async (req, res, next) => {
    const { nome } = req.params
    // console.log(db.usuarios())
    try {
      res.send(
        await db.usuarios().save(nome)
      )
      next()
    } catch (error) {
      res.send(error)
      next()
    }
  })

  server.put('usuario', async (req, res, next) => {
    const { id, nome } = req.params
    // console.log(db.usuarios().id)
    try {
      res.send(
        await db.usuarios().update(id, nome)
      )
      next()
    } catch (error) {
      res.send(error)
      next()
    }
  })

// server.delete(('usuario', (req, res, next) => {
//   res.send()
//   next()
// })

// server.header()
}
module.exports = routes
