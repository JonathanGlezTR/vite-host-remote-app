import { createContext, useContext, useState } from "react";

const state = {
  name: "Jhona",
  count: 0,
  setName: () => {},
  setCount: () => {},
};

const RemoteContext = createContext(state);

export function RemoteContextProvider({ children }) {
  const [name, setName] = useState(state.name);
  const [count, setCount] = useState(0);

  const context = {
    ...state,
    name,
    setName,
    count,
    setCount,
  };

  return (
    <RemoteContext.Provider value={context}>{children}</RemoteContext.Provider>
  );
}

export function useRemoteContext() {
  return useContext(RemoteContext);
}

export function RemoteContextComponent() {
  const { name, count } = useRemoteContext();
  return (
    <div>
      Remote Context
      <p>Name: {name}</p>
      <p>Count: {count}</p>
    </div>
  );
}
