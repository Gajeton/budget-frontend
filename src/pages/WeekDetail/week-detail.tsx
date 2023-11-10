import { Outlet, useLocation, useParams } from "react-router-dom";
import { BudgetDetail } from "../../components/BudgetDetail/budget-detail";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import CardTitle from "../../components/CardTitle/card-title";
import { GetTravelDetailByIdType } from "../../enums/types";


function WeekDetail() {

  const [data, setData] = useState<GetTravelDetailByIdType>();;
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const { user } = useAuth0()
  const {id} = useParams()
  useEffect(() => {
    if (user) {
      axios.get(import.meta.env.VITE_API_URL + "travels/travel_detail/" + id )
        .then((response) => setData(response.data))
        .catch((error) => setError(error.message))
        .finally(() => { setLoaded(true), console.log(data)});
    }
  }, []);

  if (loaded && data) {
    return error ? (
      <span>Error: {error}</span>
    ) : (
    <div className="flex flex-col items-center p-1 w-4/5">
      <CardTitle navigateUrl="." title="Week details" />
      <div className="recap w-full  bg-[#F6F4EB] p-4 text-lg font-latoBold border border-gray-300 overflow-hidden rounded-sm">
        <h2>Nb of expenses : {data.nbExpense}</h2>
        <h2>Nb of incomes : {data.nbIncome}</h2>
        <h2>Total incomes : {parseFloat(data.totalIncome)}$</h2>
        <h2>Total expenses : {parseFloat(data.totalExpense)}$</h2>
        <h3>Balance incomes/expenses : {parseFloat(data.totalIncome) - parseFloat(data.totalExpense)}</h3>
      </div>
      <BudgetDetail />
      <Outlet />
    </div>
    );
  }
  return <span>Loading...</span>;
}

export default WeekDetail;
