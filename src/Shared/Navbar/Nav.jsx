
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavLists from "../../Components/NavLists/Navlists";
import { RiShoppingCart2Line } from "react-icons/ri";

const Nav = () => {

  const { pathname } = useLocation();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="sticky top-0 z-10 mx-auto max-w-[1440px]">
      <div className="sticky top-0 z-10">
        <Navbar className="sticky top-0 z-10 h-max max-w-full bg-opacity-0 backdrop-blur-md shadow-none border-none rounded-none px-4 py-2 lg:px-3 lg:py-2">
          <div className="grid grid-cols-3 text-black">
                <Typography
                as="a"
                className="mr-4 play font-bold cursor-pointer py-1.5"
                >
                    FurinFlex
                </Typography>

              <div className="mr-4 hidden lg:flex items-center justify-center">
                <NavLists />
              </div>

              <div className="flex items-center justify-end gap-3">

                <RiShoppingCart2Line className="text-xl"/>
                
              </div>

            <div className="flex items-center gap-4 gro">

              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>

            </div>

          </div>

          <MobileNav open={openNav}>
            <NavLists />
            <div className="flex items-center gap-x-1">
              <Button fullWidth variant="text" size="sm" className="">
                <span>Log In</span>
              </Button>
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>Sign in</span>
              </Button>
            </div>
          </MobileNav>
        </Navbar>
      </div>
    </div>
  );
};

export default Nav;
