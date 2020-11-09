import React, { PureComponent } from "react";

export default class PureComp extends PureComponent {
  render() {
    console.log("pure rendered");
    return (
      <div>
        <h1>This is Pure Component  {this.props.name}</h1>
        
      </div>
    );
  }
}

//Pure component only re renders when there's a change in shallow comparison of props and states 
// only works with class based component