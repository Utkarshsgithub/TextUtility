import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [darkMode, setMode] = useState(false);

  let r = document.querySelector("body");

  const toggleMode = () => {
    if (darkMode === false) {
      setMode(true);
      showAlert("Dark Mode is now enabled", "success");
      r.style.setProperty("--primary-color", "#111");
      r.style.setProperty("--secondary-color", "#fff");
    } else {
      setMode(false);
      showAlert("Light Mode is now enabled", "success");
      r.style.setProperty("--primary-color", "#fff");
      r.style.setProperty("--secondary-color", "#111");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" toggleMode={toggleMode} mode={darkMode} />{" "}
        <Alert alert={alert} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextArea showAlert={showAlert} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
