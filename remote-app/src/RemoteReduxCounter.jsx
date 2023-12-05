import { useSelector } from "react-redux";
import { useCounterActions } from "./store/counterSlice";

export default function RemoteReduxCounter() {
  const state = useSelector((s) => s.counter);
  const actions = useCounterActions();

  return (
    <div>
      <p> Remote component</p>
      <p>count is {state.count}</p>
      <button onClick={() => actions.increment()}>increase counter + 1</button>
    </div>
  );
}
