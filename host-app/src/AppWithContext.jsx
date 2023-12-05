import {
  useRemoteContext,
  RemoteContextComponent,
  RemoteContextProvider,
} from "remoteApp/RemoteContext";

function AppContext() {
  const context = useRemoteContext();
  const { count, setCount } = context;
  return (
    <div>
      <h2>Remote Context</h2>
      <div className="local">
        <code>{JSON.stringify(context)}</code>
        <p></p>
        <button onClick={() => setCount(count + 1)}>count + 1</button>
      </div>
      <div className="remote">
        <RemoteContextComponent />
      </div>
    </div>
  );
}

export default function AppWithContext() {
  return (
    <RemoteContextProvider>
      <AppContext />
    </RemoteContextProvider>
  );
}
