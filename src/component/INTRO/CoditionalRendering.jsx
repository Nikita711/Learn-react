import React, { Component } from 'react'

export default class CoditionalRendering extends Component {

UserGreeting=(props)=>{
    return <h1>Welcome Nikita</h1>
}
Gusetgreeting =(props) =>{
    return <h1>Welcome Guest</h1>
}


Greeting = props =>{
    const isloggedIn = props.isLoggedIn ;
    if(isloggedIn ){
        return <this.UserGreeting/>
    }else{
        return <this.Gusetgreeting/>
    }
}

    render() {
        return (
            <div>
                <h1>React also support conditional rendering</h1>
<this.Greeting isloggedIn={false}/>

            </div>
        )
    }
}
