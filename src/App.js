import './App.css';
// import ConditionalRendering from './components/ConditionalRendering/ConditionalRendering';
// import Countries from './components/Countries/Countries';
// import ExportTesting from './components/ExportTesting/ExportTesting';
import GrandFather from './components/GrandFather/GrandFather';
import { createContext, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";
import firebaseAuthentication from './FirebaseApp/Firebase.initialize';
import Loginform from './components/Form/Loginform';



/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
// firbase authentication setup
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
firebaseAuthentication();
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();
const auth = getAuth();
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
export const NameContext = createContext("name");
function App() {
  /*----------------------------------------------------------------*/
  /*----------------------------------------------------------------*/
  // set some useState here
  /*----------------------------------------------------------------*/
  /*----------------------------------------------------------------*/
  const [house, setHouse] = useState(0);
  const [user, setUser] = useState({});
  const nameMe = "Sohidul Islam Shufol";
  /*----------------------------------------------------------------*/
  /*----------------------------------------------------------------*/
  // handle some increment decrementCounter function
  /*----------------------------------------------------------------*/
  /*----------------------------------------------------------------*/
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

  /*----------------------------------------------------------------*/
  /*----------------------------------------------------------------*/
  //handling google sign in
  /*----------------------------------------------------------------*/
  /*----------------------------------------------------------------*/

  const handleGoogleSignIn = () => {


    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const Loginuser = result.user;


        // console.log("Credential: ", credential);
        // console.log("Token: ", token);
        // console.log("User: ", Loginuser);

        const { displayName, email, photoURL, emailVerified } = Loginuser;
        console.log("User name; ", displayName);
        console.log("User email; ", email);
        console.log("User photoURL; ", photoURL);
        console.log("User emailVerified; ", emailVerified);
        const newUser = {
          name: displayName,
          email: email,
          img: photoURL,
          isVarified: emailVerified ? "true" : "false"
        }
        setUser(newUser)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorMessage);
      });
  }

  // handling git hub popup sign in 
  const handleGitSignIn = () => {

    signInWithPopup(auth, gitProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const Loginuser = result.user;

        console.log("Login user: ", Loginuser);
        // console.log("Credential: ", credential);
        // console.log("Token: ", token);
        // console.log("User: ", Loginuser);

        const { displayName, email, photoURL, emailVerified } = Loginuser;
        console.log("User name; ", displayName);
        console.log("User email; ", email);
        console.log("User photoURL; ", photoURL);
        console.log("User emailVerified; ", emailVerified);
        const newUser = {
          name: displayName,
          email: email,
          img: photoURL,
          isVarified: emailVerified ? "true" : "false"
        }
        setUser(newUser)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorMessage);
      });
  }
  // handling sign out 
  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("Sign Out Successful");
      setUser({})
    }).catch((error) => {
      console.log("Sign Out failed");
    });
  }
  //handling sign up button
  const handleSignUp = (e) => {
    console.log("sign up successful");
    e.preventDefault();
  }
  const handleEmail = (e) => {
    // console.log("sign out successful");
    console.log(e.target.value);
    // e.preventDefault();
  }
  const handlePassword = (e) => {
    // console.log("sign out successful");
    console.log(e.target.value);
    // e.preventDefault();
  }

  /*----------------------------------------------------------------*/
  /*----------------------------------------------------------------*/
  //return and rendering on user interface here.
  /*----------------------------------------------------------------*/
  /*----------------------------------------------------------------*/
  return (

    <NameContext.Provider value={[nameMe, house]}>
      <div className="App">
        {/* <ConditionalRendering testing=""></ConditionalRendering>
      <ExportTesting></ExportTesting>
      <Countries /> */}
        {/* <button onClick={incrementCounter}>House(+)</button>
        <button onClick={decrementCounter}>House(-)</button> */}
        {/* <GrandFather name={nameMe} house={house}></GrandFather> */}
        {/* <GrandFather></GrandFather> */}

        <button onClick={handleGoogleSignIn}>Sign In Google</button>
        <button onClick={handleGitSignIn}>Sign In Github</button>
        <button onClick={handleSignOut}>Sign Out</button>
        <br /><br /><br />
        <div><Loginform handleReg={[handleSignUp, handleEmail, handlePassword]}></Loginform></div>
        <br /><br /><br />

        {user && <div>
          {user.name && <h1>Name: {user.name}</h1>}
          {user.email && <h3>Email: {user.email}</h3>}
          {user.isVarified && <h3>Varified: {user.isVarified}</h3>}
          {user.img && <img src={user.img} alt="" />}

        </div>}

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
