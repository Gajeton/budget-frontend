import { useEffect, useState } from "react";
import CardMonthItem from "./card-month-item";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment, { Moment } from "moment";

export type TravelMonth = {
  id: number,
  startDate : Moment,
  endDate: Moment,
  month: number
}

export const CardMonth = () => {
  const [data, setData] = useState<TravelMonth>();;
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();
  const { user } = useAuth0()

  useEffect(() => {
    if (user) {
      axios.get(import.meta.env.VITE_API_URL + "travel/getNumberOfMonths/" + id + "/" + user.sub)
        .then((response) => setData(response.data))
        .catch((error) => setError(error.message))
        .finally(() => setLoaded(true));
    }
  }, []);
  
  const getMonths = (data: TravelMonth) => {
    let content = [];
    let text = ""
    let startYear = moment(data.startDate).year()
    let startMonth = moment(data.startDate).month()
    
    const monthsList = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    let indexMonth = startMonth
    for (let i = 0; i < data.month; i++) {
      if (indexMonth === 12) {
        indexMonth = 0
        startYear = moment(data.startDate).add(1, 'years').year()
      }
      text = monthsList[indexMonth] + " " + startYear
      content.push(<CardMonthItem id={data.id}  month={text}/>);
      indexMonth++
    }
    return content;
  };

 
  if (loaded && data) {
    return error ? (
      <span>Error: {error}</span>
    ) :  (
      <div className="">
        <div className="grid grid-cols-3 gap-2">
          {getMonths(data)}
        </div>
        <div className="my-4"></div>
      </div>
    );
  }
  return <p>Loading ....</p>
};

export default CardMonth