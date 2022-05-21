import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
    </div>
  );
}

function Person() {
  const personStyle = {
    backgroundColor: "beige",
    color: "black",
    margin: "20px",
    padding: "20px",
    borderRadius: "20px",
    border: "1px solid black",
  }
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
      <h1>Name: Sohidul Islam</h1>
      <h3>Profession: Developer</h3>
    </div>
  );
}
export default App;
