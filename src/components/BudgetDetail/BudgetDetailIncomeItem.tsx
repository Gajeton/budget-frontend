import { AiOutlinePlus } from "react-icons/ai";
import { NavLink } from "react-router-dom";

interface BudgetDetailIncomeItemProps {
    categorie: string;
    amount: number;
}


const BudgetDetailIncomeItem = ({ categorie, amount }: BudgetDetailIncomeItemProps) => {

    return (
        <tr>
            <td className="px-4 py-4 text-sm  whitespace-nowrap">
                {categorie}
            </td>
            <td className="px-4 py-4 text-sm  whitespace-nowrap">
                {amount}
            </td>
            <td className="px-4 py-4 text-sm  whitespace-nowrap">
                <NavLink className="flex justify-center"
                    to="add-income"
                ><AiOutlinePlus /></NavLink>
            </td>
        </tr>
    );

}

export default BudgetDetailIncomeItem