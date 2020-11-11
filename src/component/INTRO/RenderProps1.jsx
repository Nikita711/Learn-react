import React, { Component } from "react";

export default class RenderProps1 extends Component {


  render() {
    return (
      <div>
       {this.props.render(false)}
      </div>
    );
  }
}

//"render props" refers to a techniue for sharing code between react components using a prop whose value is a function