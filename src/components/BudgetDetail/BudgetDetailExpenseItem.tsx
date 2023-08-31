import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { NavLink } from "react-router-dom";

interface BudgetDetailExpenseItemProps {
    categorie: string;
    estimated:number
    amount: number;

}


const BudgetDetailExpenseItem = ({ categorie, amount, estimated }: BudgetDetailExpenseItemProps) => {

    const [pourcentage, setPourcentage] = useState((estimated/amount)*100);
    return (
        <tr>
            <td className="px-4 py-4 text-sm  whitespace-nowrap">
                {categorie}
            </td>
            <td className="px-4 py-4 text-sm  whitespace-nowrap">
            {estimated}
            </td>
            <td className="px-4 py-4 text-sm  whitespace-nowrap">
            {amount}
            </td>
            <td className="px-4 py-4 text-sm  whitespace-nowrap">
                {pourcentage}
            </td>
            <td className="px-4 py-4 text-sm  whitespace-nowrap">
                <NavLink className="flex justify-center"
                    to="add-expense"
                ><AiOutlinePlus /></NavLink>
            </td>
        </tr>
    );

}

export default BudgetDetailExpenseItem