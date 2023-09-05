import { Outlet, useLocation } from "react-router-dom";
import BudgetDetail from "../../components/BudgetDetail/budget-detail";
import CardTitle from "../../components/CardTitle/card-title";

export const DayDetail = () => {

  const location = useLocation();
  const test = location.state;
 
  return (
    <div className="flex flex-col items-center p-1 w-4/5">
      <CardTitle navigateUrl=".." title="January" />

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

