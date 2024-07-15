const jsonServer = require('json-server')

const fs = require('fs')
const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json')))
const router = jsonServer.router(db)
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000
server.use(middlewares)
// Add this before server.use(router)

server.use(router)
server.listen(port)
// Export the Server API
module.exports = server
