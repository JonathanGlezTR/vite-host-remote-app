import { useSelector } from "react-redux";
import { useCounterActions } from "remoteApp/RemoteCounterSlice";
import RemoteReduxCounter from "remoteApp/RemoteReduxCounter";
import { Provider } from "react-redux";

import { store } from "./store/store";

function AppRedux() {
  const store = useSelector((s) => s);
  const state = useSelector((s) => s.counter);
  const actions = useCounterActions();

  return (
    <div>
      <h2>Redux</h2>
      <div className="local">
        <div>
          <div>local store data</div>
          <code>{JSON.stringify(store)}</code>
        </div>
        <p />
        <button onClick={() => actions.increment()}>
          redux count is {state.count}
        </button>
      </div>

      <div className="remote">
        <RemoteReduxCounter />
      </div>
    </div>
  );
}

export default function AppWithRedux() {
  return (
    <Provider store={store}>
      <AppRedux />
    </Provider>
  );
}
