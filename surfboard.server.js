const { interval } = require('rxjs')
const express = require('express')

const sources = {
    dummy: interval(1000)
}

const server = express()

server.get('/foo', (_req, res) => {
    res.send({ foo: 'bar' })
})

module.exports = { sources, server }
