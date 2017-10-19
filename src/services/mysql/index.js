const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'restfull_mysql'
})

const usuariosModule = require('./usuarios')({ connection })

module.exports = {
  usuarios: () => usuariosModule
}
