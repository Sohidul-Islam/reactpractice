import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <Person name="Sohidul Islam" profession="Web developer" ></Person>
      <Person name="Owahidul Hoque Chowdhury" profession="App developer"></Person>
      <Person name="Kaium Uddin" profession="Web devloper"></Person>
    </div >
  );
}

function Person(props) {
  // const personStyle = {
  //   backgroundColor: "beige",
  //   color: "black",
  //   margin: "20px",
  //   padding: "20px",
  //   borderRadius: "20px",
  //   border: "1px solid black",
  // }
  return (
    // <div className="person-box"> adding className as person box
    // <div style={personStyle}> adding style object
    // <div style={{write style here}}>
    <div style={{
      backgroundColor: "beige",
      color: "black",
      margin: "20px",
      padding: "20px",
      borderRadius: "20px",
      border: "1px solid black",
    }}>
      <h1>Name: {props.name}</h1>
      <h3>Profession: {props.profession}</h3>
    </div>
  );
}
export default App;
