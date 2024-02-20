import Homepage from './Pages/Homepage';
import LoginPage from './Pages/Login';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDb7hZzt9G4yjZPseKwTYS5AKggwoN0V0g",
  authDomain: "login-8fe9b.firebaseapp.com",
  projectId: "login-8fe9b",
  storageBucket: "login-8fe9b.appspot.com",
  messagingSenderId: "215283474188",
  appId: "1:215283474188:web:f87838ab73d13dd0de7329"
};

const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div classNameName="flex flex-col h-screen w-auto ">
      <LoginPage/> 
     
    </div>
  );
}

export default App;

