import React from "react";
import ReactDOM from "react-dom";

function StyleguideTest(props) {
  return (
    <div>
      <button className="primary">Styleguide Test</button>
      <input type="text" value="56789" />
    </div>
  );
}

const containerDiv = document.createElement("div");
document.body.appendChild(containerDiv);
ReactDOM.render(<StyleguideTest />, containerDiv);
