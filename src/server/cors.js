const corsMiddleware = require('restify-cors-middleware')
const cors = corsMiddleware({
  preflightMaxAge: 5,
  /* TODO Dev open */
  // origins: ['http://api.myapp.com', 'http://web.myapp.com'],
  // allowHeaders: ['API-Token'],
  // exposeHeaders: ['API-Token-Expiry']
  origins: ['*'],
  allowHeaders: ['*'],
  exponseHeaders: ['*']
})

module.exports = cors
