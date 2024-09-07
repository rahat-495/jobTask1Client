
import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider,onAuthStateChanged,signInWithPopup, signOut } from "firebase/auth";
import auth from '../Firebase/firebase.config'

export const AuthContext = createContext(null) ;

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(() => {
        const savedUser = localStorage.getItem('user') ;
        return savedUser ? savedUser : null ;
    }) ;
    const [loading , setLoading] = useState(false) ;

    const signUp = async (fName , lName , email , pass) => {
        const {data} = await axios.post(`http://localhost:5555/signUp` , {fName , lName , email , pass}) ;
        localStorage.setItem('user' , email) ;
        setUser(email) ;
        return data ;
    }
    
    const login = async (email , pass) => {
        const {data} = await axios.get(`http://localhost:5555/login?email=${email}&pass=${pass}`) ;
        localStorage.setItem('user' , email) ;
        setUser(email) ;
        return data ;
    }
    
    const logOut = async () => {
        const userEmail = localStorage.getItem('user') ;
        if(userEmail){
            setUser(null) ;
            localStorage.removeItem('user') ;
            const {data} = await axios.patch(`http://localhost:5555/logOut` , {email : userEmail}) ;
            return data ;
        }
    }

    const googleLogin = () => {
        setLoading(true) ;
        const googleProvider = new GoogleAuthProvider() ;
        return signInWithPopup(auth , googleProvider) ;
    }

    const logOutDynamic = () => {
        setLoading(true) ;
        return signOut(auth) ;
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth , (currentUser) => {
            localStorage.setItem('user' , currentUser?.email) ;
            setUser(currentUser) ;
            setLoading(false) ;
        })
        return unSubscribe ;
    } , [])

    const authInfo = {
        user ,
        login ,
        signUp ,
        logOut ,
        googleLogin ,
        logOutDynamic ,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
