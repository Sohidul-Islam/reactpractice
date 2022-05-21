import logo from './logo.svg';
import './App.css';
import { useState } from "react"

function App() {

  return (
    <div className="App">
      <Counter><h1>hello</h1></Counter>
    </div >
  );
}


function Counter() {
  const [counter, setCounter] = useState(0);
  //counter as a variable
  //setCounter as function that change the state variable.
  const incrementCounter = () => {
    //  method 1
    // setCounter(counter + 1)
    const newCounter = counter + 1;
    // method 2
    setCounter(newCounter)
  }
  const decrementCounter = () => {
    setCounter(counter - 1)
  }
  return (
    <div>
      <h1>Counte: {counter}</h1>
      {/* method 1 */}
      {/* <button onClick={incrementCounter}>Increased</button> */}
      {/* method 2 */}
      <button onClick={() => {
        setCounter(counter - 1)
      }}>Increased</button>
      <button onClick={decrementCounter}>Decreased</button>
    </div>
  )
}
export default App;

