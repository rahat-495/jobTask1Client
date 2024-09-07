
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";

export const ProductsContext = createContext(null) ;

const ContextProvider = ({children}) => {

    const {user} = useAuth()
    const [products , setProducts] = useState([]) ;
    const [count , setCount] = useState(0) ;
    const [refetch , setRefetch] = useState(false) ;

    useEffect(() => {
        axios.get('/products.json')
        .then((res) => {
            setProducts(res?.data) ;
        })
    } , [])

    useEffect(() => {
        axios.get(`http://localhost:5555/cartItemCount?email=${user?.email ? user?.email : user}`)
        .then((res) => {
            setCount(res?.data?.count) ;
        })
    } , [refetch])

    const contextValue = {
        count ,
        refetch ,
        products ,
        setRefetch ,
    }

    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ContextProvider ;