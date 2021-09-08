import { Counter } from "@/components";

import ViteLogo from "@/assets/svg/logo-vite.svg";
import ReactLogo from "@/assets/svg/logo-react.svg";
import ReduxLogo from "@/assets/svg/logo-redux.svg";

import "@/assets/css/App.css";

export default function App(): React.ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex justify-center items-center">
          <img src={ReactLogo} className="App-logo" alt="logo" />
          <img src={ViteLogo} alt="logo" />
          <img src={ReduxLogo} className="App-logo" alt="logo" />
        </div>
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}
