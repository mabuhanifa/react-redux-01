import { useDispatch, useSelector } from "react-redux/es/exports";
import "./App.css";
import { decrement, increment, reset } from "./redux/action/counterAction";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  console.log(count);
  return (
    <div>
      <h4>{count}</h4>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
