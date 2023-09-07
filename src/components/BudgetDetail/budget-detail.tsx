import { useEffect, useState } from "react";
import BudgetDetailIncomeItem from "./budget-detail-income-item";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import BudgetDetailExpenseItem from "./budget-detail-expense-item";
import CardTitle from "../CardTitle/card-title";


export const BudgetDetail = () => {
    const [categoryExpense, setCategoryExpense] = useState<any[]>([]);
    const [categoryIncome, setCategoryIncome] = useState<any[]>([]);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
    const { user } = useAuth0()
    const location = useLocation()
    const { travelId } = location.state
    console.log(travelId, "travelId")

    useEffect(() => {
        if (user) {
            axios.get(import.meta.env.VITE_API_URL + "travel/getCategoryIncomeByTravelId/" + travelId)
                .then((response) => setCategoryIncome(response.data))
                .catch((error) => setError(error.message))
                .finally(() => setLoaded(true));

            axios.get(import.meta.env.VITE_API_URL + "travel/getCategoryExpenseByTravelId/" + travelId)
                .then((response) => setCategoryExpense(response.data))
                .catch((error) => setError(error.message))
                .finally(() => setLoaded(true));
        }
    }, []);

    if (loaded) {
        return error ? (
            <span>Error: {error}</span>
        ) : (
            <div className="w-full  flex resp:bg-black justify-between my-6">
                <div className="expenses w-[35%]">
                    <h1 className="text-xl font-latoBold">Incomes</h1>
                    <div className="border border-gray-300 overflow-hidden rounded-sm">
                        <table className="min-w-full divide-y divide-gray-200  ">
                            <thead className="bg-[#749BC2] font-latoBold">
                                <tr>
                                    <th className="py-3.5 px-4 text-sm font-normal text-center ">
                                        Categorie
                                    </th>
                                    <th className="py-3.5 px-4 text-sm font-normal text-center">
                                        Total incomes
                                    </th>
                                    <th className="py-3.5 px-4 text-sm font-normal text-center ">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-[#F6F4EB] divide-y divide-gray-200 text-center ">
                                {categoryIncome.map(res => {
                                    return <BudgetDetailIncomeItem categoryId={res.id} travelId={travelId} categoryName={res.categoryTitle} entrysAmount={res.entrysAmount} />
                                })
                                }

                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="expenses w-[60%]">
                    <h1 className="text-xl font-latoBold">Expenses</h1>
                    <div className=" border border-gray-300 overflow-hidden rounded-sm">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-[#749BC2] text-black  font-latoBold">
                                <tr>
                                    <th className="py-3.5 px-4 text-sm font-normal text-center">
                                        Categorie
                                    </th>
                                    <th className="py-3.5 px-4 text-sm font-normal text-center">
                                        Estimated budget
                                    </th>
                                    <th className="py-3.5 px-4 text-sm font-normal text-center">
                                        Total expenses
                                    </th>
                                    <th className="py-3.5 px-4 text-sm font-normal text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-[#F6F4EB] divide-y divide-gray-200 text-black text-center">
                                {categoryExpense.map(res => {
                                    return <BudgetDetailExpenseItem travelId={travelId} categoryId={res.id} categoryName={res.categoryTitle} entrysAmount={res.entrysAmount} countEntrys={res.countEntry} />
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
    return <span>Loading...</span>;


}



