import CardTitle from "../components/CardTitle/card-title";
import { AiOutlinePlus } from "react-icons/ai"

import { useEffect, useState } from "react";
import AddTravelModal from "../components/Modals/add-travel.modal";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { TravelCardHome } from "../components/Travel/travel-card-home";
import Pagination from "../components/Pagination/pagination";
import { GetTravelsType } from "../enums/types";

function Home() {
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const { user } = useAuth0()
  const [data, setData] = useState<GetTravelsType[]>([]); // Adjust the type as needed for your data structure
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    if (user) {
      axios.get(import.meta.env.VITE_API_URL + "travel/getTravels/" + user.sub)
        .then((response) => setData(response.data))
        .catch((error) => setError(error.message))
        .finally(() => setLoaded(true));
    }
  }, []);

  // useEffect(() => {
  //   if(user){
  //     axios.get(import.meta.env.VITE_API_URL + "travel/getTravels/" + user.sub)
  //     .then((response) => {
  //       setData(response.data);
  //       setTotalPages(Math.ceil(response.data.length / perPage));
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     })
  //     .finally(() => setLoaded(true))
  //   }

  // }, [currentPage, perPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Handle page change logic here, if needed
  };

  if (loaded && data) {
    return error ? (
      <span>Error: {error}</span>
    ) : (
      <>
        <div className="flex flex-col items-center w-4/5">
          <CardTitle navigateUrl="." title="My travels" />
          {data.map(res => {
            return <TravelCardHome id={res.id} destination={res.destination} startDate={res.startDate} endDate={res.endDate} totalExpense={res.totalExpense} totalIncome={res.totalIncome} />
          })}
          <Pagination totalPages={totalPages} onPageChange={handlePageChange} currentPage={currentPage} />

        </div>
        
      </>
    );
  }
  return <> <Link
    to="add-travel"
    className="fixed z-90 bottom-10 right-8 bg-[#4682A9] w-12 h-12 rounded-sm drop-shadow-lg flex justify-center items-center text-white text-4xl">
    <AiOutlinePlus size={50} />
  </Link>
  <Outlet />
    <span>Loading...</span></>;

}

export default Home