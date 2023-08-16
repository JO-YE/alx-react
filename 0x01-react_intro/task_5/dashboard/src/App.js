import Holberton from "./Holberton.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={Holberton} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div class="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email"> Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password"> Password: </label>
        <input type="password" id="password" name="password" />
        <button> OK</button>
      </div>
      <div class="App-footer">
        <p>
          Copyright {getFullYear()}- {getFooterCopy()}
        </p>
      </div>
    </div>
  );
}

export default App;
