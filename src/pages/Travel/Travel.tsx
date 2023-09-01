import { Outlet, useParams } from "react-router-dom";
import CardTitle from "../../components/CardTitle/CardTitle";
import ProgressBarLine from "../../components/ProgressBar/ProgressBarLine";
import CardMonth from "../../components/CardMonths/CardMonthItem";
import './travel.css';
import { useEffect, useState } from "react";
import TravelPeriodTabs from "../../components/TravelPeriodTabs/TravelPeriodTabs";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { TravelCard } from "../../components/Travel/TravelCard";

function Travel() {
  const [data, setData] = useState<any>(null);;
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  const { user } = useAuth0()

  useEffect(() => {

    // if (user) {
    //   axios.get(import.meta.env.VITE_API_URL + "travel/getTravels/" + user.sub)
    //     .then((response) => setData(response.data))
    //     .catch((error) => setError(error.message))
    //     .finally(() => setLoaded(true));
    // }
  }, []);


  const [monthList, setMonthList] = useState([]);
  const [monthCount, setMonthCount] = useState(0);
  const [controller, setController] = useState({
    page: 0,
    rowsPerPage: 4
  });


  if (loaded) {
    return error ? (
      <span>Error: {error}</span>
    ) : (
      <>
        <TravelCard />
        <div className="mt-4 w-full">
          <TravelPeriodTabs />
        </div>
      </>
    );
  }
  return <span>Loading...</span>;

}

export default Travel;
