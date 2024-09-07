
import {NavLink} from "react-router-dom";
import { Typography } from "@material-tailwind/react";

const NavLists = () => {

  return <ul className="mt-2 gro mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    <Typography as="li" className="p-1 font-normal gro">
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-semibold bg-[#F8F8F8] px-3 py-2 rounded-md transition-all ease-in-out duration-300"
            : ""
        }
      >
        Home
      </NavLink>
    </Typography>

    <Typography as="li" className="p-1 font-normal gro">
      <NavLink
        to={"/products"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-semibold bg-[#F8F8F8] px-3 py-2 rounded-md transition-all ease-in-out duration-300"
            : ""
        }
      >
        Products
      </NavLink>
    </Typography>

    <Typography as="li" className="p-1 font-normal gro">
      <NavLink
        to={"/myCart"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-semibold bg-[#F8F8F8] px-3 py-2 rounded-md transition-all ease-in-out duration-300"
            : ""
        }
      >
        My Cart
      </NavLink>
    </Typography>
  </ul>;
};

export default NavLists;
