import React, { Component, Fragment } from 'react'
import Helmet from "react-helmet"

export class Wrapper extends Component {
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>NumEconCopenhagen</title>
                </Helmet>
                {this.props.children}
            </Fragment>
        )
    }
}

export default Wrapper
