import React, { Component } from "react";
import PureComp from "./PureComponent";
import RegularComponent from "./RegularComponent";

export class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "nikita",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "nikita",
      });
    }, 2000);
  }

  render() {
    console.log("parent rendered");
    return (
      <div>
        <h1>this is parent component  </h1>
        <RegularComponent name={(this.state, name)} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponent;
