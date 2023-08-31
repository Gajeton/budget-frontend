import { AiOutlinePlus } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import BudgetDetailExpenseItem from "./BudgetDetailExpenseItem";
import BudgetDetailIncomeItem from "./BudgetDetailIncomeItem";

interface CardMonthProps {
    keyItem: string
}

const BudgetDetail = () => {

    return (
        <div className="w-full  flex resp:bg-black justify-between my-6">
            <div className="expenses w-[25%]">
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
                            {[1, 2, 3, 4, 5, 6].map(res => {
                                return <BudgetDetailIncomeItem categorie="Cat 1" amount={20} />
                            })
                            }

                        </tbody>
                    </table>
                </div>

            </div>
            <div className="expenses w-[70%]">
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
                                    Progress
                                </th>
                                <th className="py-3.5 px-4 text-sm font-normal text-center">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-[#F6F4EB] divide-y divide-gray-200 text-black text-center">
                            {[1, 2, 3, 4, 5].map(res => {
                                return <BudgetDetailExpenseItem categorie="Cat 1" amount={500} estimated={800} />
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default BudgetDetail 