
import {Outlet, useLocation} from 'react-router-dom'
import Nav from '../Shared/Navbar/Nav';
import Footer from '../Shared/Footer/Footer';

const Root = () => {
    
    const {pathname} = useLocation() ;
console.log(pathname !== '/login' || pathname !== '/signUp' && "asfsd")
    return (
        <div>

            <div className="">
                {
                    pathname !== '/login' || pathname !== '/signUp' || <Nav/>  
                }
            </div>

            <div className="">
                <Outlet/>
            </div>

            <div className="">
                {
                    pathname !== '/login' || pathname !== '/signUp' || <Footer/>  
                }
            </div>

        </div>
    );
};

export default Root;
