import "./App.css";
import DetectCrawlingReact from "detect-crawling-react";
import Router from "./Router.js";

function App() {
  return (
    <div className="App">
      <DetectCrawlingReact backURL={"http://3.36.31.6:8000/react/"} />
      <Router />
    </div>
  );
}

export default App;
