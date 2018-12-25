const { start } = require('@surfboard/ui')

document.addEventListener('DOMContentLoaded', () => {
    const node = document.createElement('div')
    document.body.appendChild(node)

    start(node)
})
