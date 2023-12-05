import { useState } from "react";
import { Provider, useSelector } from "react-redux";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { store } from "./store/store";
import { useCounterActions } from "./store/counterSlice";

function AppContent() {
  const [count, setCount] = useState(0);
  const state = useSelector((state) => state.counter);
  const actions = useCounterActions();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Remote + Vite</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div>
        <p>Redux</p>
        <button onClick={() => actions.increment()}>
          redux count is {state.count}
        </button>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

