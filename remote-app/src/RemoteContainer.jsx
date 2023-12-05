import Button from "./components/Button";
const RemoteContainer = (props) => {
  const { count, user = {}, actions = {} } = props;

  return (
    <div className="remote-container">
      Remote Container
      <div>user: {user?.name}</div>
      <div>count: {count}</div>
      <Button onClick={() => actions?.setCount?.()}>count + 1</Button>
    </div>
  );
};

export default RemoteContainer;
