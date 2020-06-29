import React from "react";
import reactlogo from "./images/react.png";
import nodelogo from "./images/nodeJS.png";

function techLogos() {
  return (
    <div>
      <div className="techlogoStyle">
        <img src={reactlogo} alt="reactlogo" />
      </div>
      <div className="techlogoStyle">
        <img src={nodelogo} alt="nodelogo" />
      </div>
    </div>
  );
}

export default techLogos;
