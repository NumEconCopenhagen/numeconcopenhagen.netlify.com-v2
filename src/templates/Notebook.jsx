import React from 'react';
import NotebookRender from "@nteract/notebook-render";
import Header from "../components/Header"


class NotebookWrapper extends React.Component {
    constructor(props, { pageContext }) {
        super(props)
        this.state = { 'class': 'none' }
    }
    componentDidMount() {
        this.setState({ 'class': 'block' })
    }
    render() {
        const { children, data } = this.props
        return (
            <div style={{ display: this.state.class }}>
                <Header>
                    {children}
                </Header>
            </div >
        )
    }
}

export default ({ pageContext }) => (<NotebookWrapper><NotebookRender notebook={pageContext.data} /></NotebookWrapper>)

