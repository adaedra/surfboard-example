import { initialize, subscribeTo, Widget, Frame, Layout } from '@surfboard/ui'
import { Value } from '@surfboard/widgets'
import React from 'react'

import '@surfboard/ui/dist/style.css'

class Dummy extends Widget {
    subscribe() {
        return subscribeTo(this.props.source)
    }

    render() {
        return <Frame>{this.state[this.props.source]}</Frame>
    }
}

initialize(() => ({
    default: (
        <Layout.Row>
            <Layout.Column>
                <Value source={() => subscribeTo('http', 'value')} />
                <Value source={() => subscribeTo('dummy', 'value')} />
            </Layout.Column>
            <Dummy source="dummy" />
        </Layout.Row>
    )
}))
