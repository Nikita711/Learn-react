import React, { Component } from 'react'
import ComponentF from "./ComponentF"
import UserContext from './userContext'
export default class componentE extends Component {
    render() {
        return (
            <div>
                Component E context {this.context}
             <ComponentF/> 
            </div>
        )
    }
}
componentE.contextType = UserContext
