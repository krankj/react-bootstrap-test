import logo from "./logo.svg";
import Button from "react-bootstrap/Button";
import "./App.css";
import Accordion from "react-bootstrap/Accordion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="sudi">Primary</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
