import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TravelCard } from "../../components/Travel/travel-card";
import './travel.css';
import { TravelPeriodTabs } from "../../components/TravelPeriodTabs/travel-period-tabs";

function Travel() {
  const [data, setData] = useState<Travel>();;
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();
  const { user } = useAuth0()

  useEffect(() => {
  
    if (user) {
      axios.get(import.meta.env.VITE_API_URL + "travel/getTravelById/" + id + "/" + user.sub)
        .then((response) => setData(response.data))
        .catch((error) => setError(error.message))
        .finally(() => setLoaded(true));
    }
  }, []);

  if (loaded && data) {
    return error ? (
      <span>Error: {error}</span>
    ) : (
      <>
        <div className="mt-4 w-4/5">
          <TravelCard day={data.day} budget={data.budget} />
          <TravelPeriodTabs />
        </div>
      </>
    );
  }
  return <span>Loading...</span>;

}

export default Travel;
