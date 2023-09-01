import CardTitle from "../components/CardTitle/CardTitle";
import { AiOutlinePlus } from "react-icons/ai"

import { useEffect, useState } from "react";
import AddTravelModal from "../components/Modals/AddTravelModal";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import TravelCardHome from "../components/Travel/TravelCardHome";

function Home() {

  const [data, setData] = useState<any[]>();
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [formatDate, setFormData] = useState<any>();
  const { user } = useAuth0()

  useEffect(() => {
    if (user) {
      axios.get(import.meta.env.VITE_API_URL + "travel/getTravels/" + user.sub)
        .then((response) => setData(response.data))
        .catch((error) => setError(error.message))
        .finally(() => setLoaded(true));
    }


  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  let location = useLocation();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loaded && data) {
    return error ? (
      <span>Error: {error}</span>
    ) : (
      <>
        <div className="flex flex-col items-center w-4/5">
          <div>

          </div>
          <CardTitle navigateUrl="." title="My travels" />
          {data.map(res => {
            return <TravelCardHome destination={res.destination[0]} startDate={res.startDate} endDate={res.endDate}/>
          })}

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
  return <span>Loading...</span>;

}

export default Home