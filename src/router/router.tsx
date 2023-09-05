import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import CardDay from "../components/CardDay/card-day";
import CardMonth from "../components/CardMonths/card-month";
import CardWeek from "../components/CardWeek/card-week";
import AddTravelModal from "../components/Modals/add-travel.modal";
import Layout from "../layouts/layout";
import Admin from "../pages/Admin/admin";
import AddExpenseModal from "../components/Modals/add-expense.modal";
import AddIncomeModal from "../components/Modals/add-income.modal";
import Home from "../pages/home";
import MonthDetail from "../pages/MonthDetail/month-detail";
import Travel from "../pages/Travel/travel";
import { AuthenticationGuard } from "../components/authentication-guard";
import { useAuth0 } from "@auth0/auth0-react";
import { PageLoader } from "../pages/page-loader";
import { Presentation } from "../pages/presentation";
import { AdminDestination } from "../components/Admin/AdminDestination/admin-destination";
import { AdminExpense } from "../components/Admin/AdmineExpense/admin-expense";
import { AdminIncome } from "../components/Admin/AdminIncome/admin-income";
import WeekDetail from "../pages/WeekDetail/week-detail";

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
              <Route path=":id" element={<WeekDetail />}>
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
