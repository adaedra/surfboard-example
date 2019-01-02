import { initialize } from '@surfboard/ui'
import Widget from '@surfboard/ui/dist/widget'
import dispatcher from '@surfboard/ui/dist/websocket'
import React from 'react'
import { pluck } from 'rxjs/operators'

class Dummy extends Widget {
    constructor(props) {
        super(props)

        this.sources = {
            value: dispatcher.pipe(pluck(this.props.source))
        }
    }

    render() {
        return <div>{this.state.value}</div>
    }
}

initialize(() => ({
    default: <Dummy source="dummy" />
}))
