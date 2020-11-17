// import ParentComponent from "./component/PURE_COMP/ParentComponent";
import Props from "./component/INTRO/Props";
import Welcome from "./component/INTRO/Welcome";
import States from "./component/INTRO/States";
import Events from "./component/INTRO/Events";
import CoditionalRendering from "./component/INTRO/CoditionalRendering";
// import HOC from "./component/INTRO/HOC";
import RenderProps1 from "./component/INTRO/RenderProps1";
import ComponentC from "./component/INTRO/ComponentC";
import { UserProvider } from "./component/INTRO/userContext";
// import PostList from "./component/HTTP/PostList";
import PostForm from "./component/HTTP/PostForm";
// import ClassCounter from "./component/HOOKS/ClassCounter";
import HooksCounter from "./component/HOOKS/HooksCounter";
import HooksCounterTwo from "./component/HOOKS/HooksCounterTwo";

function App() {
  return (
    <div className="App">
      {/* <ParentComponent /> */}
      <Welcome />
      <Props name="nikita" />
      <States />
      <Events />
      <CoditionalRendering />
      {/* <HOC /> */}
      <RenderProps1
        render={(isLoggedIn) => (isLoggedIn ? "NIkita" : "Guest")}
      />
      <UserProvider value="Nikita Singh">
        <ComponentC />
      </UserProvider>
      {/* <PostList/> */}
      <PostForm />
      {/* <ClassCounter /> */}
      {/* <HooksCounter /> */}
      <HooksCounterTwo />
    </div>
  );
}

export default App;
// import React, { Component } from "react";
// //
// import Hoc from "./component/INTRO/HOC";

// class App extends Component {
//   render() {
//     return <div>Higher-Order Component Tutorial</div>;
//   }
// }
// App = Hoc(App);
// export default App;
