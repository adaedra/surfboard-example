import { initialize, subscribeTo, Widget, Frame, Layout } from '@surfboard/ui'
import React from 'react'

import '@surfboard/ui/dist/style.css'

class Dummy extends Widget {
    subscribe() {
        return subscribeTo(this.props.source)
    }

    render() {
        return <Frame>{this.state.dummy}</Frame>
    }
}

initialize(() => ({
    default: (
        <Layout.Row>
            <Layout.Column>
                <Dummy source="dummy" />
                <Dummy source="dummy" />
            </Layout.Column>
            <Dummy source="dummy" />
        </Layout.Row>
    )
}))
