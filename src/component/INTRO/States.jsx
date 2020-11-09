import React, { Component } from 'react'

export default class States extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
         
             content:<h2>thank you</h2>
        }
    }
    handleChange = () =>{
        this.setState({
            content:<h1>subscribing</h1>
        })
    }
    
    render() {
        return (
            <div>
              
               <button onClick={this.handleChange}>{this.state.content}</button>

            </div>
        )
    }
}
