import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("");

  const handlePunctuationClick = () => {
    let punctuations = [".", "/"];
    let newText = " ";
    punctuations.forEach((element) => {
      if (text.includes(element)) {
        newText = text.replace(element, "");
      } else {
        newText = text;
      }
    });
    setText(newText);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to UPPERCASE", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };

  const handleCopy = () => {
    let newText = document.getElementById("textarea");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text copied to clipboard", "success");
  };

  //   const [myStyle, setMyStyle] = useState({
  //     change: "False",
  //     "--primary-color": "#fff",
  //     "--secondary-color": "#141850",
  //     "--tirtiary-color": "rgb(243, 243, 243)",
  //   });

  //   function handleDarkMode() {
  //     if (myStyle.change === "False") {
  //       setMyStyle({
  //         "--primary-color": "#111",
  //         "--secondary-color": "#fff",
  //         "--tirtiary-color": "rgb(36, 36, 36)",
  //         change: "True",
  //       });
  //     } else {
  //       setMyStyle({
  //         "--primary-color": "#fff",
  //         "--secondary-color": "#141850",
  //         "--tirtiary-color": "rgb(243, 243, 243)",
  //         change: "False",
  //       });
  //     }
  //   }

  return (
    <>
      <div id="form">
        <label htmlFor="textarea"> Enter Your Text Here. </label>{" "}
        <textarea
          value={text}
          onChange={handleOnChange}
          name="textarea"
          id="textarea"
          cols="100"
          rows="10"
        ></textarea>{" "}
        <div>
          <button
            onClick={handleUpClick}
            className="btn btn-outline-primary my-2"
          >
            Uppercase{" "}
          </button>{" "}
          <button onClick={handleLowClick} className="btn btn-outline-primary">
            Lowercase{" "}
          </button>{" "}
          <button
            onClick={handleClearClick}
            className="btn btn-outline-primary"
          >
            Clear Text{" "}
          </button>{" "}
          <button
            onClick={handlePunctuationClick}
            className="btn btn-outline-primary"
          >
            Punctuation{" "}
          </button>{" "}
          <button
            onClick={handleCopy}
            id="copy"
            className="btn btn-outline-primary"
          >
            Copy Text{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      <div className="scndsection">
        <div className="preview">
          {" "}
          <h2> Preview </h2>{" "}
          <p> {text.length > 0 ? text : "Enter text for preview"} </p>{" "}
        </div>{" "}
        <div id="textsummary">
          <h1> Your Text Summary </h1>{" "}
          <ul>
            <li>
              Your Text Contains {text.length + " "}
              Characters{" "}
            </li>{" "}
            <li>
              Your Text Contains {text.split(" ").length + " "}
              Words{" "}
            </li>{" "}
            <li>
              Your Text Is {0.08 * text.split(" ").length + " "}
              Minutes Read{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
