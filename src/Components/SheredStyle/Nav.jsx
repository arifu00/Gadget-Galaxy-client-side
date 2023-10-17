import {
  MobileNav,
  Button,
  IconButton,
} from "@material-tailwind/react";
import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

// nav use from "material-tailwind"

const Nav = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <>
      <li className=" font-normal">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-400 font-semibold underline"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className=" font-normal">
        <NavLink
          to="/addproduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-400 font-semibold underline"
              : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li className=" font-normal">
        <NavLink
          to="/mycart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-400 font-semibold underline"
              : ""
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      {/* nav  */}
      <nav className="mb-8 bg-blue-gray-50 py-2 md:py-6 shadow-lg">
        <div className="container mx-auto">
          <div className="flex items-center  justify-between text-blue-gray-900">
            <img src={logo} alt="" className="w-20 h-16 rounded-full" />
            <div className="hidden lg:block">
              {" "}
              <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-lg">
                {navList}
              </ul>
            </div>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-400 font-semibold underline"
                  : ""
              }
            >
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block text-lg"
              >
                <span>Login</span>
              </Button>
            </NavLink>
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
          <MobileNav open={openNav}>
            <div className="container mx-auto text-lg">
              <ul className="text-black text-center ">{navList}</ul>
              <div className="text-center">
                <NavLink to="/login">
                  <button className="text-black text-center">Login</button>
                </NavLink>
              </div>
            </div>
          </MobileNav>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
