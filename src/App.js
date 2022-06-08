import './App.css';
// import ConditionalRendering from './components/ConditionalRendering/ConditionalRendering';
// import Countries from './components/Countries/Countries';
// import ExportTesting from './components/ExportTesting/ExportTesting';
import GrandFather from './components/GrandFather/GrandFather';
import { createContext, useState } from 'react';

export const NameContext = createContext("name");

function App() {
  const [house, setHouse] = useState(0);
  const nameMe = "Sohidul Islam Shufol";
  const incrementCounter = () => {
    const newState = house + 1;
    setHouse(newState);
  }
  const decrementCounter = () => {
    let newState = house - 1;
    if (newState < 0) {
      newState = 0;
    }
    setHouse(newState);
  }
  return (

    <NameContext.Provider value={nameMe}>
      <div className="App">
        {/* <ConditionalRendering testing=""></ConditionalRendering>
      <ExportTesting></ExportTesting>
      <Countries /> */}
        <button onClick={incrementCounter}>House(+)</button>
        <button onClick={decrementCounter}>House(-)</button>
        {/* <GrandFather name={nameMe} house={house}></GrandFather> */}
        <GrandFather house={house}></GrandFather>
      </div >
    </NameContext.Provider>

  );
}


export default App;


// function Counter() {
//   const [counter, setCounter] = useState(0);
//   //counter as a variable
//   //setCounter as function that change the state variable.
//   const incrementCounter = () => {
//     //  method 1
//     // setCounter(counter + 1)
//     const newCounter = counter + 1;
//     // method 2
//     setCounter(newCounter)
//   }
//   const decrementCounter = () => {
//     setCounter(counter - 1)
//   }
//   return (
//     <div>
//       <h1>Counte: {counter}</h1>
//       {/* method 1 */}
//       {/* <button onClick={incrementCounter}>Increased</button> */}
//       {/* method 2 */}
//       <button onClick={() => {
//         setCounter(counter - 1)
//       }}>Increased</button>
//       <button onClick={decrementCounter}>Decreased</button>
//     </div>
//   )
// }



// function ExternalUsers() {
//   //1st step
//   const [users, setUsers] = useState([])
//   // use useEffect function to data load.
//   useEffect(() => {
//     console.log("inside use effect");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(data => setUsers(data))

//     console.log("Users: ", users);
//   }, [])
//   return (
//     <div><h2>External Users</h2>
//       {users.map(user => <Users name={user.name} email={user.email} city={user.address.city}></Users>)}
//     </div>
//   )
// }


// function Users(props) {
//   return (<div className="person-box">
//     <h3>Name: {props.name}</h3>
//     <h3>Email: {props.email}</h3>
//     <h3>City: {props.city}</h3>
//   </div>)
// }