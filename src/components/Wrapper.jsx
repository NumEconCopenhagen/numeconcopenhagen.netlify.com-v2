import React, { Component, Fragment } from 'react'
import Helmet from "react-helmet"

export class Wrapper extends Component {
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>{this.props.title}</title>
                </Helmet>
                {this.props.children}
            </Fragment>
        )
    }
}

export default Wrapper
