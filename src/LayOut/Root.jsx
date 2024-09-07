
import {Outlet, useLocation} from 'react-router-dom'
import Nav from '../Shared/Navbar/Nav';
import Footer from '../Shared/Footer/Footer';

const Root = () => {
    
    const {pathname} = useLocation() ;
    
    return (
        <div>

            <div className="sticky top-0 z-10">
                {
                    pathname === '/' || pathname === '/products' || pathname === '/myCart' ? <Nav/> : ''
                }
            </div>

            <div className="">
                <Outlet/>
            </div>

            <div className="">
                {
                    pathname === '/' || pathname === '/products' || pathname === '/myCart' ? <Footer/> : ''
                }
            </div>

        </div>
    );
};

export default Root;
