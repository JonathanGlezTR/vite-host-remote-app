import { Route, Routes, Link } from "react-router-dom";

import "./App.css";

import AppLocalState from "./AppLocalState";
import AppWithContext from "./AppWithContext";
import AppWithRedux from "./AppWithRedux";

function App() {
  return (
    <>
      <h1>HOST APP</h1>
      <div className="routes-container">
        <ul>
          <li>
            <Link to="/local-state">Local state</Link>
          </li>
          <li>
            <Link to="/context">Context</Link>
          </li>
          <li>
            <Link to="/redux">Redux</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/local-state" element={<AppLocalState />} />
          <Route path="/context" element={<AppWithContext />} />
          <Route path="/redux" element={<AppWithRedux />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

