import React, { Component } from "react";

export class RegularComponent extends Component {
  render() {
    console.log("regular rendered");
    return (
      <div>
        <h1>Regular component  {this.props.name}</h1>
       
      </div>
    );
  }
}

export default RegularComponent;
