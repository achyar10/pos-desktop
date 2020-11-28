const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const md5 = require('md5')
const compression = require('compression')
const model = require('./models')
const routes = require('./routes')

const server = express()

server.use(cors())
server.use(compression())
server.use(bodyParser.json({ limit: '50mb' }))
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

server.use(routes)
server.get('/', (req, res) => {
    res.send('Welcome to server POS')
})
server.use((req, res, next) => {
    res.status(404).send('<h2 align=center>Page not found!</h2>')
})

server.listen(5001, async () => {
    try {
        await model.sequelize.sync({ force: false, alter: true })
        const check = await model.user.findOne({ where: { username: 'admin' } })
        if (!check) {
            await model.user.create({ username: 'admin', password: md5('admin'), role: 1, fullname: 'Administrator' })
        }
        console.log('Server running on port 5001')
    } catch (error) {
        console.log(error)
    }
})
