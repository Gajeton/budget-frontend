import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { BudgetDetail } from "../../components/BudgetDetail/budget-detail";


interface BudgetMonthDetail {
  total : number
  nbTotal : number
  expenses : ExpensesDetail[]
  incomes : IncomesDetail[]
}

interface ExpensesDetail {
  id : number,
  category : CategoryExpense
}

interface IncomesDetail {
  id : number,
  category : CategoryIncome
}

export const MonthDetail = () => {
  const [data, setData] = useState<BudgetMonthDetail>();;
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();
  const { user } = useAuth0()

  useEffect(() => {
    if (user) {
      axios.get(import.meta.env.VITE_API_URL + "travels/number_of_weeks/" + id + "/" + user.sub)
        .then((response) => setData(response.data))
        .catch((error) => setError(error.message))
        .finally(() => setLoaded(true));
    }
  }, []);
 
  return (
    <div className="flex flex-col items-center p-1 w-4/5">
      <div className="recap w-full  bg-[#F6F4EB] p-4 text-lg font-latoBold border border-gray-300 overflow-hidden rounded-sm">
        <h2>Nb of expenses : 20</h2>
        <h2>Nb of incomes : 2</h2>
        <h2>Total incomes : 320$</h2>
        <h2>Total expenses : 800$</h2>
        <h3>Balance incomes/expenses : {800 - 320}</h3>
      </div>
      <BudgetDetail />
      <Outlet />
    </div>
  );
}

export default MonthDetail;
