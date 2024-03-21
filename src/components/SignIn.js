import React from 'react'
import { getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import {app} from "../firebase";
function SignIn () {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const signupWithGoogle = ()=>{
        signInWithPopup(auth,googleProvider)
    }
  return (
    <div>
        SignIn
        <button onClick={signupWithGoogle}>Sign In with google</button>
    </div>
  )
}

export default SignIn;
