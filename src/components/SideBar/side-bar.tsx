import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineSetting } from "react-icons/ai";
import { IoIosPaperPlane } from "react-icons/io";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

interface SidebarItemProps {
  index: number;
}

export const  Sidebar = () => {

  const [open, setOpen] = useState(true);
  const [tooltipUser, settooltipUser] = useState(false);
  const { isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { user } = useAuth0();


  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
    });
  };

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  if(user) {
    axios
    .post(import.meta.env.VITE_API_URL + "user/createUser/", { idAuth0 : user.sub , name : user.name})
  }

  return (
    <nav
      className={` ${open ? "w-[18rem]" : "w-20"
        } sticky top-0 left-0 flex flex-col py-1 px-3 bg-[#4682A9] font-latoBold  duration-300 `}
    >
      <div className="relative flex items-start justify-center flex-col min-w-8 py-4 " >
        <NavLink
          to="/"
          className="flex justify-start items-center gap-5"
        >
          <RiMoneyEuroCircleFill className="w-14 h-14  " />
          <h1
            className={`text-xl
                     ${!open && "hidden pointer-events-none"}`}
          >
            Budget APP
          </h1>
        </NavLink>

        <div
          className={`absolute top-1 -right-12 flex justify-center items-center rounded-sm w-8 h-8 bg-[#749BC2] text-white shadow-md cursor-pointer
                     ${!open && "rotate-180 "}`}
          onClick={() => setOpen(!open)}
        >
          <AiOutlineArrowLeft className="w-6 h-6 " />
        </div>
      </div>
      <div className="pt-2 border-t-2 border-t-black text-xl">
        <ul className="relative">
          <li
            className={`relative 
            hover:w-full hover:rounded-sm hover:text-black hover:bg-[#91C8E4]
            focus:w-full focus:rounded-sm focus:text-black focus:bg-[#91C8E4] group `}
          >
            <NavLink
              to="/admin"
              title="Admin"
              className={`relative flex justify-start items-center gap-5 text-black p-2`}
              style={({ isActive }) => {
                return {
                  width: isActive ? "100%" : "",
                  textDecoration: isActive ? "none" : "",
                  backgroundColor: isActive ? "#91C8E4" : "",
                  borderRadius: isActive ? "2px" : "",
                  outline: isActive ? "none" : "",
                  color: isActive ? "black" : "",
                };
              }}
            >
              <AiOutlineSetting className='w-10 h-10' />
              <span
                className={`ml-8 text-lg
                     ${!open && "hidden pointer-events-none"}`}
              >
                Admin
              </span>
              <span
                className={` bg-[#91C8E4] hidden text-black text-center rounded-md py-1 px-3 absolute z-[1] left-[75px]
                ${!open && "hidden group-hover:block"}`}
              >
                Admin
              </span>
            </NavLink>
          </li>
          <li
            className={`relative mt-1
            hover:w-full hover:rounded-sm hover:text-black hover:bg-[#91C8E4]
            focus:w-full focus:rounded-sm focus:text-black focus:bg-[#91C8E4] group `}
          >
            <NavLink
              to="/home"
              title="My travels"
              className={`relative flex justify-start items-center gap-5 text-black p-2`}
              style={({ isActive }) => {
                return {
                  width: isActive ? "100%" : "",
                  textDecoration: isActive ? "none" : "",
                  backgroundColor: isActive ? "#91C8E4" : "",
                  borderRadius: isActive ? "2px" : "",
                  outline: isActive ? "none" : "",
                  color: isActive ? "black" : "",
                };
              }}
            >
              <IoIosPaperPlane className='w-10 h-10' />
              <span
                className={`ml-8 text-lg
                     ${!open && "hidden pointer-events-none"}`}
              >
                My travels
              </span>
              <span
                className={` bg-[#91C8E4] hidden text-black text-center rounded-md py-1 px-3 absolute z-[1] left-[75px]
                ${!open && "hidden group-hover:block"}`}
              >
                My travels
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="pt-2 flex justify-center flex-col mt-auto">
        {isAuthenticated && (
          <div className="flex items-center gap-4 py-6 px-1 border-t-2 border-t-black">
            <div className="realtive flex group">

              <>
                <img src={user.picture} className="block w-16 h-16 cursor-pointer rounded-full object-cover hover:scale-105 " />
                <span
                  className={` bg-[#91C8E4] hidden text-black text-center rounded-md py-1 px-3 absolute z-[1] left-[47px] bottom-[42px]
                ${" group-hover:block"}`}
                >
                  <div onClick={handleLogout} className="hover:text-[#4682A9]  rounded-sm p-1">Logout</div>
                </span>
              </>

            </div>

            <div
              className={`text-xl flex flex-col gap-1
                     ${!open && "hidden pointer-events-none"}`}
            >
              <div className="text-left text-base">{user.name}</div>
              <div className="text-base">{user.email}</div>
            </div>
          </div>
        )}


        {!isAuthenticated && (
          <div className="text-lg flex justify-between mb-3 px-2 w-full">
            <button className="hover:bg-[#91C8E4] rounded-sm p-1" onClick={handleLogin}>
              Log In
            </button>
            <button className="hover:bg-[#91C8E4] rounded-sm p-1" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Sidebar;
