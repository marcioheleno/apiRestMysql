/* eslint-disable standard/object-curly-even-spacing,new-cap */

const usuarios = dependencias => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = dependencias
        connection.query('SELECT * FROM usuarios', (error, results) => {
          if (error) {
            errorHandler(error, 'Falha ao listar os usuários', reject)
          } else {
            resolve({ usuarios: results })
          }
        })
      })
    },
    save: (nome) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = dependencias
        // let data = new date()
        connection.query('INSERT INTO usuarios (nome) VALUES (?)', [nome], (error, results) => {
          if (error) {
            errorHandler(error, `Error ao salvar usuários ${nome}`, reject)
          }
          resolve({ usuarios: { nome, id: results.insertId }})
        })
      })
    },
    update: (id, nome) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = dependencias
        // let data = new date()
        connection.query('UPDATE usuarios SET nome = ? WHERE id = ?', [nome, id], (error, results) => {
          if (error) {
            errorHandler(error, `Error ao autualizar o usuário ${nome}`, reject)
          }
          resolve({ usuarios: { nome, id: results.insertId }})
        })
      })
    },
    del: (id) => {}
  }
}

module.exports = usuarios
