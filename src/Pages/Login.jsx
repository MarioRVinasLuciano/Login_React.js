import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Homepage from './Homepage';

export default function LoginPage() {
    const [isRegistered, setRegistered] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setIsLoggedIn(true);
        } catch (error) {
            setErrorMessage(error.message);
            if (error.code === "auth/invalid-credential") {
                setErrorMessage("Invalid email or password. Please try again.");
            } else {
                setErrorMessage(error.message);
            }
            setTimeout(() => {
                setErrorMessage('');
            }, 5000);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }
        
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setIsLoggedIn(true);
        } catch (error) {
            setErrorMessage(error.message);
            setTimeout(() => {
                setErrorMessage('');
            }, 5000);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage(''); 
        isRegistered ? handleSignIn(e) : handleSignUp(e);
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-blue-100">
            {!isLoggedIn ? (
                <form onSubmit={handleSubmit} className="flex flex-col h-80 w-72 bg-gray-100 rounded-sm">
                    <div className="flex justify-center mt-5">
                        <h1 className="text-4xl">
                            {isRegistered ? "Login" : "Register"}
                        </h1>
                    </div>
                    <input className="bg-gray-100 h-20 w-60 mx-5 mt-4 rounded-sm outline-2 outline-blue-300 pl-2 ring-1 ring-gray-300" value={email} type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input className="bg-gray-100 h-20 w-60 mx-5 mt-4 rounded-sm outline-2 outline-blue-300 pl-2 ring-1 ring-gray-300" value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    {!isRegistered && (
                        <div>
                            <input className="bg-gray-100 h-10 w-60  mx-5 mt-4 rounded-sm outline-1 outline-blue-500 pl-2 ring-1 ring-gray-300" value={confirmPassword} type="password" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
                            {password !== confirmPassword && (
                                <p className="text-red-500 mx-5 mt-1">Passwords do not match</p>
                            )}
                        </div>
                    )}
                    {errorMessage && (
                        <p className="text-red-500 mx-5 mt-2">{errorMessage}</p>
                    )}
                    <button className="mt-7 bg-blue-400 mx-5 h-16 rounded-sm mb-6 hover:bg-blue-500" type="submit"> {isRegistered ? "Login" : "Register"}</button>
                    {isRegistered === true && (<button className="mt-2 mb-4 text-sm text-blue-200 hover:text-blue-500" onClick={() => setRegistered(false)}>Click here if not registered</button>)}
                </form>
            ) : (
                <Homepage />
            )}
        </div>
    );
}

