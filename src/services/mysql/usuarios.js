
const usuarios = dependencias => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection } = dependencias
        connection.query('SELECT * FROM usuarios', (error, results) => {
          if (error) {
            reject(error)
          }
          resolve({ usuarios: results })
        })
      })
    },
    save: (name) => {},
    update: (is, name) => {},
    del: (id) => {}

  }
}

module.exports = usuarios
