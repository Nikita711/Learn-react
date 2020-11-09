import React, { Component } from 'react'

export default class Props extends Component {
    render() {
        return (
            <div>
                <h1>We're learning Props In react</h1>
                <h3>My name is {this.props.name}</h3>
            </div>
        )
    }
}
