// // import ParentComponent from "./component/PURE_COMP/ParentComponent";
// import Props from "./component/INTRO/Props";
// import Welcome from "./component/INTRO/Welcome";
// import States from "./component/INTRO/States";
// import Events from "./component/INTRO/Events";
// import CoditionalRendering from "./component/INTRO/CoditionalRendering";
// import HOC from "./component/INTRO/HOC";

// function App() {
//   return (
//     <div className="App">
//       {/* <ParentComponent /> */}
//       <Welcome />
//       <Props name="nikita" />
//       <States />
//       <Events />
//       <CoditionalRendering />
//       <HOC />

//     </div>
//   );
// }

// export default App;
import React, { Component } from "react";
//
import Hoc from "./component/INTRO/HOC";

class App extends Component {
  render() {
    return <div>Higher-Order Component Tutorial</div>;
  }
}
App = Hoc(App);
export default App;
