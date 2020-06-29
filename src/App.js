import React from "react";
import "./App.css";
import logo from "./images/logo.png";
import Menubar from "./components/Menubar";
import Splash from "./components/Splash";
import reactlogo from "./images/react.png";
import nodelogo from "./images/nodeJS.png";
import csslogo from "./images/css3.png";

function App() {
  return (
    <div className="App">
      <div>
        <Menubar />
        <Splash />
      </div>
      <div className="myAvatar">
        <img src={logo} alt="logo" />
      </div>
      <div className="techSplash">
        <div className="techSplash">
          <img src={reactlogo} alt="reactlogo" />
        </div>
        <div className="techSplash">
          <img src={nodelogo} alt="nodelogo" />
        </div>
        <div className="techSplash">
          <img src={csslogo} alt="csslogo" />
        </div>
      </div>
      <div className="mainMidSplash">
        <div className="mainMidContent">
          <p>
            I'm Vik and I am a full stack software engineer. I code in React,
            Node, Express and PostgreSQL
          </p>
        </div>
        <div className="mainMidContent">
          <p>
            When I am not coding you will find me cooking, creating music or
            playing with my 5 year old lad mix.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
