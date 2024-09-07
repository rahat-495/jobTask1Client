
import {createBrowserRouter} from 'react-router-dom' ;
import Root from '../LayOut/Root';
import Home from '../Pages/Home/Home';
import SignUp from '../Pages/SignUp/SignUp';
import Login from '../Pages/Login/Login';
import Products from '../Pages/Products/Products';
import MyCart from '../Pages/MyCart/MyCart';

const router = createBrowserRouter([
    {
        path : '/' ,
        element : <Root/>,
        children : [
            {
                path : '/' ,
                element : <Home/> ,
            },
            {
                path : '/signUp' ,
                element : <SignUp/> ,
            },
            {
                path : '/login' ,
                element : <Login/> ,
            },
            {
                path : '/products' ,
                element : <Products/> ,
            },
            {
                path : '/myCart' ,
                element : <MyCart/> ,
            },
        ] 
    }
])

export default router;
