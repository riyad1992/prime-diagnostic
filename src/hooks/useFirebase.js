import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAtentication from "../Firebase/Firebase.init";


initializeAtentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
      }
    
      const handleNameChange = e => {
        setName(e.target.value);
      }
      const handleEmailChange = e => {
        setEmail(e.target.value);
      }
    
      const handlePasswordChange = e => {
        setPassword(e.target.value)
      }

    const SignInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }


    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
          setError('Password Must be at least 6 characters long.')
          return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          setError('Password Must contain 2 upper case');
          return;
        }
    
        if (isLogin) {
          processLogin(email, password);
        }
        else {
          registerNewUser(email, password);
        }
    
      }

      const processLogin = (email, password) => {
            signInWithEmailAndPassword(auth, email, password)
              .then(result => {
                setError('');
              })
              .catch(error => {
                setError(error.message);
              })
          }

      const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            verifyEmail();
            setUserName();
            logOut()
          })
          .catch(error => {
            setError(error.message);
          })
      }

      const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(result => {})
      }
    
      const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
          .then(result => {})
      }
    
      const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
          .then(result => { })
      }

    return {
        user,
        isLoading,
        error,
        isLogin,
        SignInWithGoogle,
        logOut,
        toggleLogin,
        handleNameChange,
        handleEmailChange, 
        handlePasswordChange,
        handleRegistration,
        handleResetPassword
    }

}

export default useFirebase;
// import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
// import { useEffect, useState } from "react";
// import initializeAtentication from "../Firebase/Firebase.init";


// initializeAtentication()

// const useFirebase = () => {
//     const [user, setUser] = useState({})
//     const [isLoading, setIsLoading] = useState(true);


//     const auth = getAuth();
//     const googleProvider = new GoogleAuthProvider()

//     const SignInWithGoogle = () => {
//         setIsLoading(true);
//         return signInWithPopup(auth, googleProvider)
//         .finally(() => setIsLoading(false));
//     }

//     useEffect(() => {
//         const unsubscribed = onAuthStateChanged(auth, user => {
//             if (user) {
//                 setUser(user);
//             }
//             else {
//                 setUser({})
//             }
//             setIsLoading(false);
//         });
//         return () => unsubscribed;
//     }, [auth])

//     const logOut = () => {
//         setIsLoading(true);
//         signOut(auth)
//             .then(() => { })
//             .finally(() => setIsLoading(false));
//     }

//     return {
//         user,
//         isLoading,
//         SignInWithGoogle,
//         logOut
//     }

// }

// export default useFirebase;