import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(console.log("logged out"))
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white  font-bold bg-[#f43b86] hover:text-white hover:bg-[#f43b86]"
              : ""
          }
        >
          <span className="text-white font-bold"> Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            isActive
              ? "text-white  font-bold bg-[#f43b86] hover:text-white hover:bg-[#f43b86]"
              : ""
          }
        >
          <span className="text-white font-bold"> About Us</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive
              ? "text-white  font-bold bg-[#f43b86] hover:text-white hover:bg-[#f43b86]"
              : ""
          }
        >
          <span className="text-white font-bold"> Event</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive
              ? "text-white  font-bold bg-[#f43b86] hover:text-white hover:bg-[#f43b86]"
              : ""
          }
        >
          <span className="text-white font-bold"> Register</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-white  font-bold bg-[#f43b86] hover:text-white hover:bg-[#f43b86]"
              : ""
          }
        >
          <span className="text-white font-bold">Login</span>
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="btn btn-ghost normal-case text-xl">
            <div>
              <img
                src="Gaming-logo-template-on-transparent-background-PNG.png"
                alt=""
                className="w-16"
              />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        {user ? (
          <div className="navbar-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt="" />
              </div>
            </label>
            {user && (
              <span className="text-white mr-2">{user.displayName}</span>
            )}
            <button
              onClick={handleLogout}
              className="text-white bg-[#f43b86] px-7 py-3 rounded-sm font-semibold"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="navbar-end ">
            <Link to="/login">
              <button className="text-white bg-[#f43b86] px-5 py-3 rounded-sm font-semibold">
                login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
