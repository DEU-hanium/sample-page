import "./App.css";
import DetectCrawlingReact from "detect-crawling-react";
import Router from "./Router.js";

function App() {
  const callback = async () => {
    const response = await fetch("http://3.36.31.6:8000/react/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      alert("crawling detected");
      window.location.href =
        "http://crawling-ALB-37796986.ap-northeast-2.elb.amazonaws.com";
    }
  };
  return (
    <div className="App">
      <DetectCrawlingReact callback={callback} />
      <Router />
    </div>
  );
}

export default App;
