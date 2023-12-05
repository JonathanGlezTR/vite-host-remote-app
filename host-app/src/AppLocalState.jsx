import { useReducer } from "react";
import MyButton from "remoteApp/Button";
import RemoteContainer from "remoteApp/RemoteContainer";

const reducer = (state, action) => {
  switch (action.type) {
    case "setCount":
      return {
        ...state,
        count: action.value,
      };
    case "setName":
      return {
        ...state,
        user: {
          ...state.user,
          name: action.value,
        },
      };
  }
};

const user = {
  name: "John",
  id: "1",
  phone: "5000000001",
};

export default function AppLocalState() {
  const [state, dispatch] = useReducer(reducer, { user, count: 0 });

  const actions = {
    setCount: () => dispatch({ type: "setCount", value: state.count + 1 }),
    setName: (value) => dispatch({ type: "setName", value }),
  };

  return (
    <div>
      <h2>Local state</h2>
      <div className="local">
        <code>{JSON.stringify(state)}</code>
        <p />
        <MyButton onClick={() => actions.setCount()}>count + 1</MyButton>
        <p />
        <div>
          <input
            type="text"
            value={state.user.name}
            onChange={({ target }) => actions.setName(target.value)}
          />
        </div>
      </div>

      <div className="remote">
        <RemoteContainer
          user={state.user}
          count={state.count}
          actions={actions}
        />
      </div>
    </div>
  );
}
