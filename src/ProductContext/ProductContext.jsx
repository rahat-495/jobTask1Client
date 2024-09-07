
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";

export const ProductsContext = createContext(null) ;

const ContextProvider = ({children}) => {

    const {user} = useAuth()
    const [products , setProducts] = useState([]) ;
    const [count , setCount] = useState(0) ;
    const [cartItems , setCartItems] = useState('') ;
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
    
    
    useEffect(() => {
        axios.get(`http://localhost:5555/cartItems?email=${user?.email ? user?.email : user}`)
        .then((res) => {
            setCartItems(res?.data) ;
        })
    } , [refetch])

    const handleAdd = async (item) => {
        const {data} = await axios.patch(`http://localhost:5555/addItem` , {...item}) ;
        console.log(data) ;
    }

    const contextValue = {
        count ,
        refetch ,
        products ,
        handleAdd ,
        cartItems ,
        setRefetch ,
        setCartItems ,
    }

    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ContextProvider ;