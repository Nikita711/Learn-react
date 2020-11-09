import React, { Component } from 'react'

export default class Events extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data : "initial data"
        }
        
        this.update = this.update.bind(this);
    }


    update = () =>{
        this.setState({
            data :"final data is here"
        })
    }

    
    render() {
        return (
            <div>
                <button onClick={this.update}>Click me</button>
                {this.state.data}
            </div>
        )
    }
}
