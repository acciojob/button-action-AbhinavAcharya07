import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  // State to track whether the paragraph is visible or not
  const [isVisible, setIsVisible] = useState(false);

  // Handler function to toggle visibility on button click
  const handleToggle = () => {
    setIsVisible(true);
  };

  return (
    <div className="App" id="main">
      <button id="click" onClick={handleToggle}>
        Show Paragraph
      </button>
      <p id="para" className={isVisible ? "show" : "hide"}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
      </p>
    </div>
  );
}

export default App;
