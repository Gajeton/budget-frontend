import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import AdminDestination from "../components/Admin/AdminDestination/AdminDestination";
import CardDay from "../components/CardDay/CardDay";
import CardMonth from "../components/CardMonths/CardMonth";
import CardWeek from "../components/CardWeek/CardWeek";
import AddTravelModal from "../components/Modals/AddTravelModal";
import Layout from "../layouts/Layout";
import Admin from "../pages/Admin/Admin";

import AdminIncome from "../components/Admin/AdminIncome/AdminIncome";
import AdminExpense from "../components/Admin/AdmineExpense/AdminExpense";
import AddExpenseModal from "../components/Modals/AddExpenseModal";
import AddIncomeModal from "../components/Modals/AddIncomeModal";
import Home from "../pages/Home";
import MonthDetail from "../pages/MonthDetail/MonthDetail";
import Travel from "../pages/Travel/Travel";
import Presentation from "../pages/Presentation";
import { AuthenticationGuard } from "../components/AuthenticationGuard";
import { useAuth0 } from "@auth0/auth0-react";
import { PageLoader } from "../pages/PageLoader";

function Router() {


  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Presentation />} />
        <Route element={<AuthenticationGuard />} >
          <Route path="/home" element={<Home />}>
            <Route path="add-travel" element={<AddTravelModal />} />
          </Route>
          <Route path="/home/travel">
            <Route path=":id" element={<Travel />}>
              <Route index element={<Navigate to="month" />} />
              <Route index path="month" element={<CardMonth />} />
              <Route path="week" element={<CardWeek />} />
              <Route path="day" element={<CardDay />} />
            </Route>
            <Route path=":id/month">
              <Route path=":id" element={<MonthDetail />}>
                <Route path="add-expense" element={<AddExpenseModal />} />
                <Route path="add-income" element={<AddIncomeModal />} />
              </Route>
            </Route>
            <Route path=":id/week" >
              <Route path=":id" element={<MonthDetail />}>
                <Route path="add-expense" element={<AddExpenseModal />} />
                <Route path="add-income" element={<AddIncomeModal />} />
              </Route>
            </Route>
            <Route path=":id/day">
              <Route path=":id" element={<MonthDetail />}>
                <Route path="add-expense" element={<AddExpenseModal />} />
                <Route path="add-income" element={<AddIncomeModal />} />
              </Route>
            </Route>
          </Route>
          <Route path="admin" element={<Admin />} >
            <Route path="destination" element={<AdminDestination />} />
            <Route path="expense" element={<AdminExpense />} />
            <Route path="income" element={<AdminIncome />} />
          </Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default Router;
