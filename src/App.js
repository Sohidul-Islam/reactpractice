import './App.css';
// import ConditionalRendering from './components/ConditionalRendering/ConditionalRendering';
// import Countries from './components/Countries/Countries';
// import ExportTesting from './components/ExportTesting/ExportTesting';
import { createContext, useState } from 'react';
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";
import firebaseAuthentication from './FirebaseApp/Firebase.initialize';
import Loginform from './components/Form/Loginform';
import removeEmailDomain from './components/Utilities/functionsList';



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
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const nameMe = "Sohidul Islam Shufol";
  /*----------------------------------------------------------------*/
  /*----------------------------------------------------------------*/
  // handle some increment decrementCounter function
  /*----------------------------------------------------------------*/
  /*----------------------------------------------------------------*/

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
        // The signed-in user info.
        const Loginuser = result.user;

        const { displayName, email, photoURL, emailVerified } = Loginuser;

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
        const errorMessage = error.message;
        // The email of the user's account used.
        // The AuthCredential type that was used.
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
        // The signed-in user info.
        const Loginuser = result.user;

        console.log("Login user: ", Loginuser);

        const { displayName, email, photoURL, emailVerified } = Loginuser;

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
        const errorMessage = error.message;
        // The email of the user's account used.
        // The AuthCredential type that was used.
        // ...
        console.log(errorMessage);
      });
  }
  // handling sign out 
  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("Sign Out Successful");
      setUser({})
    }).catch(() => {
      console.log("Sign Out failed");
    });
  }
  //handling sign up button
  const handleSignUp = (e) => {
    e.preventDefault();
    // password strength validating here
    if (pass.length < 6) {
      setError("Password should be at least 6 characters")
      return;
    }
    else if (!/(?=.*[A-Z].*[A-Z])/.test(pass)) {
      setError("Password should be contain two uppercase letters")
      return;
    }

    isLoggedIn ? loginUser(email, pass) : createNewUser(email, pass);

  }

  const loginUser = (email, pass) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("successfully Logged in", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
      });
  }
  const createNewUser = (email, pass) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then(result => {
        const user = result.user;
        console.log("sign up successful");
        console.log(user);
        const newUser = {
          name: removeEmailDomain(email),
          email: email,
          img: null,
          isVarified: pass ? "true" : "false"
        }
        setUser(newUser)
        setError("success")
      }).catch(e => {
        console.log(e.message);
        setError("email already in use")
      })
  }
  const isLoggedInCheck = (e) => {
    setIsLoggedIn(e.target.checked)
    // console.log(e.target.checked);
  }
  const handleEmail = (e) => {
    // console.log("sign out successful");

    setEmail(e.target.value)
    console.log(e.target.value);
    // e.preventDefault();
  }
  const handlePassword = (e) => {
    // console.log("sign out successful");

    setPass(e.target.value)
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
        <div><Loginform handleReg={[handleSignUp, handleEmail, handlePassword, error, isLoggedInCheck, isLoggedIn]}></Loginform></div>
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
