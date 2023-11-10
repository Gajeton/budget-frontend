import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TravelDay } from "../../enums/types.enum";
import CardDayItem from "./card-day-items";



 export const CardDay = () => {
  const [data, setData] = useState<TravelDay>();;
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();
  const { user } = useAuth0()

  useEffect(() => {
    if (user) {
      axios.get(import.meta.env.VITE_API_URL + "travels/getNumberOfDays/" + id + "/" + user.sub)
        .then((response) => setData(response.data))
        .catch((error) => setError(error.message))
        .finally(() => setLoaded(true));
    }
  }, []);
  
  const getDays = (data: TravelDay) => {
    let content = [];
    const daysList = [
      'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'
    ];
    let indexDay = 0
    for (let i = 0; i < data.day; i++) {
      if (indexDay === 4) {
        indexDay = 0
      }
      content.push(<CardDayItem id={data.id} day={daysList[indexDay]} startDate={data.startDate} index={i}/>);
      indexDay++
    }
    return content;
  };
  
  if (loaded && data) {
    return error ? (
      <span>Error: {error}</span>
    ) :  (
      <div className="w-full">
        <div className="grid  gap-2">
          {getDays(data)}
        </div>
        <div className="my-4"></div>
      </div>
    );
  }
  return <p>Loading ....</p>
};

export default CardDay