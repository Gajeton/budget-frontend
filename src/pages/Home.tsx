import CardTitle from "../components/CardTitle/CardTitle";
import { AiOutlinePlus } from "react-icons/ai"
import { createImageFromInitials, getRandomColor } from "../utils/Utils"
import { useState } from "react";
import AddTravelModal from "../components/Modals/AddTravelModal";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  let location = useLocation();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <>
      <div className="flex flex-col items-center w-4/5">
        <div>

        </div>
        <CardTitle navigateUrl="." title="My travels" />
        <div className="flex w-full">
          <div
            role="list"
            className=" divide-gray-100 w-full [&>*:nth-child(even)]:my-2"
          >
            <Link
              to={`travel/${1}`}
              className="flex justify-between gap-x-6 py-2 items-center bg-[#F6F4EB] border border-gray-300 overflow-hidden rounded-sm hover:bg-[#91C8E4] p-2
              text-black font-latoBold text-lg"
            >
              <div className="flex min-w-0 gap-x-6 items-center">
                <img
                  id="preview"
                  className="w-12 h-12 rounded-full"
                  src={createImageFromInitials(
                    500,
                    "Chili",
                    getRandomColor(),
                    "RocletteProBold"
                  )}
                  alt="profile-pic"
                />
                <div className="min-w-0 flex-auto">
                  <div className="flex items-center">
                    <p className=" font-semibold leading-6  w-1/3">
                      Chili
                    </p>
                    <span className="rounded-lg bg-slate-300 leading-none text-center p-1 text-sm text-white ml-2 ">
                      Statut
                    </span>
                  </div>
                  <p className="mt-1 truncate text-sm leading-5 font-latoItalic ">
                    Sta. 2023/1/12 - End. 2024/1/11
                  </p>
                </div>
              </div>
              <div className="flex min-w-0 gap-x-6 items-center  ">
                <p>Nb expenses: 30</p>
              </div>

              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <div
                  x-data="scrollProgress"
                  className="overflow-hidden rounded-full"
                >
                  <svg className="w-10 h-10">
                    <circle
                      className="text-black"
                      stroke-width="4"
                      stroke="currentColor"
                      fill="transparent"
                      r="16"
                      cx="20"
                      cy="20"
                    />
                    <circle
                      className="text-blue-600"
                      stroke-width="4"
                      stroke-dasharray={40}
                      stroke-dashoffset={`  ${40 - (40 / 100) * 40} `}
                      stroke-linecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="16"
                      cx="20"
                      cy="20"
                    />
                  </svg>
                  <span
                    className="absolute text-xl text-blue-700"
                    x-text="35"
                  ></span>
                </div>
              </div>
            </Link>
          </div>
          
        </div>
        <Link
          to="add-travel"
          className="fixed z-90 bottom-10 right-8 bg-[#4682A9] w-12 h-12 rounded-sm drop-shadow-lg flex justify-center items-center text-white text-4xl"
        >
          <AiOutlinePlus size={50} />
        </Link>
      </div>
      <Outlet />
    </>
  );
}
export default Home