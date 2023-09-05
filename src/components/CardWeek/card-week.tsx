import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import moment, { Moment } from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardWeekItem } from "./card-week-item";


export type TravelWeek = {
  id: number,
  startDate : Moment,
  endDate: Moment,
  week: number
}

export const CardWeek = () => {
  const [data, setData] = useState<TravelWeek>();;
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();
  const { user } = useAuth0()

  useEffect(() => {
    if (user) {
      axios.get(import.meta.env.VITE_API_URL + "travel/getNumberOfWeeks/" + id + "/" + user.sub)
        .then((response) => setData(response.data))
        .catch((error) => setError(error.message))
        .finally(() => setLoaded(true));
    }
  }, []);
  
  const getWeeks = (data: TravelWeek) => {
    let content = [];
    let start = moment(data.startDate).weekday(1);
    let end = moment(data.startDate);
    for (let i = 0; i < data.week; i++) {
      end = moment(start).add(6, 'days')
      if(id) {
        content.push(<CardWeekItem id={data.id} week={i+1} travelId={+id} start={start.format("DD-MM-YYYY")} end={end.format("DD-MM-YYYY")} />);
      }
      start = end
    }
    return content;
  };
  
  if (loaded && data) {
    return error ? (
      <span>Error: {error}</span>
    ) :  (
      <div className="w-full">
        <div className="grid grid-cols-3 gap-2">
          {getWeeks(data)}
        </div>
        <div className="my-4"></div>
      </div>
    );
  }
  return <p>Loading ....</p>
};

export default CardWeek