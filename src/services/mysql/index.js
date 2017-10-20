const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'restfull_mysql'
})

const errorHandler = (error, msg, rejectFunction) => {
  console.log(error)
  rejectFunction({ error: msg })
}

const usuariosModule = require('./usuarios')({ connection, errorHandler })

module.exports = {
  usuarios: () => usuariosModule
}
