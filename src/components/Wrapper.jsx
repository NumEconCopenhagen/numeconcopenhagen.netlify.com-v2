import React, { Component, Fragment } from 'react'
import Helmet from "react-helmet"

export class Wrapper extends Component {
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>{this.props.title}</title>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-130264224-1 "></script>
                    <script>
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'UA-130264224-1 ');
                    </script>
                </Helmet>
                {this.props.children}
            </Fragment>
        )
    }
}

export default Wrapper
