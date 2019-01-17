import { initialize } from '@surfboard/ui'
import Widget from '@surfboard/ui/dist/widget'
import { subscribeTo } from '@surfboard/ui/dist/websocket'
import React from 'react'

class Dummy extends Widget {
    subscribe() {
        return subscribeTo(this.props.source)
    }

    render() {
        return <div>{this.state.dummy}</div>
    }
}

initialize(() => ({
    default: <Dummy source="dummy" />
}))
