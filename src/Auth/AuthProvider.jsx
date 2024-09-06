
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null) ;

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null) ;
    const [loading , setLoading] = useState(true) ;

    useEffect(() => {

    } , [])

    const authInfo = {}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
