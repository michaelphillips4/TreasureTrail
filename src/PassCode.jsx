import "./PassCode.css";

import { useState } from "react";

export default function PassCode() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  if (inputValue === "1234") {
    return (
      <video width="320" height="240" controls autoPlay>
        <source
          src="https://www.w3schools.com/tags/movie.mp4"
          type="video/mp4"
        />
        <source
          src="https://www.w3schools.com/tags/movie.ogg"
          type="video/ogg"
        />
        Your browser does not support the video tag.
      </video>
    );
  } else {
    return (
      <div className="terminal">
        enter your passcode: <br />
        <input
          type="text"
          className="terminal"
          value={inputValue}
          onChange={handleChange}
        ></input>
      </div>
    );
  }
}
