const { interval } = require('rxjs')

const sources = {
    dummy: interval(1000)
}

module.exports = { sources }
