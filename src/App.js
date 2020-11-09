// import ParentComponent from "./component/PURE_COMP/ParentComponent";
import Props from "./component/INTRO/Props";
import Welcome from "./component/INTRO/Welcome";
import States from "./component/INTRO/States";
import Events from "./component/INTRO/Events";
import CoditionalRendering from "./component/INTRO/CoditionalRendering";
function App() {
  return (
    <div className="App">
      {/* <ParentComponent /> */}
      <Welcome />
      <Props name="nikita" />
      <States />
      <Events />
      <CoditionalRendering />
    </div>
  );
}

export default App;
