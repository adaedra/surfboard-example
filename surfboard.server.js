const { interval, Subject } = require('rxjs')
const { startWith } = require('rxjs/operators')
const express = require('express')
const bodyParser = require('body-parser')

const httpSource = new Subject()

const sources = {
    dummy: interval(1000),
    http: httpSource.pipe(startWith(''))
}

const server = express()
server.use(bodyParser.raw())

server.post('/http', (req, res) => {
    httpSource.next(req.body.toString())
    res.sendStatus(204)
})

module.exports = { sources, server }
