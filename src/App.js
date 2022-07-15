import { useDispatch, useSelector } from 'react-redux/es/exports';
import './App.css';
import { decrement, increment } from './redux/counterSlice';

function App() {
const dispatch = useDispatch();
  const counter = useSelector((state)=>
  state.counter.value
    )
  return (
    <div >
      <h4>{counter}</h4>
      <button onClick={()=>{dispatch(increment())}}>+</button>
      <button onClick={()=>{dispatch(decrement())}}>-</button>
      {console.log(increment,decrement)}
    </div>
  );
}

export default App;
