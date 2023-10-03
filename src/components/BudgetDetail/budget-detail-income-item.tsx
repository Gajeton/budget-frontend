import { AiOutlinePlus } from "react-icons/ai";
import { NavLink } from "react-router-dom";

interface BudgetDetailIncomeItemProps {
    categoryId: number;
    categoryName: string
    travelId: number
    entrysAmount: number

}

const BudgetDetailIncomeItem = ({ categoryId, categoryName, travelId, entrysAmount }: BudgetDetailIncomeItemProps) => {
    return (
        <tr>
            <td className="px-4 py-4 text-sm  whitespace-nowrap">
                {categoryName}
            </td>
            <td className="px-4 py-4 text-sm  whitespace-nowrap">
                {entrysAmount}
            </td>
            <td className="px-4 py-4 text-sm  whitespace-nowrap">
                <NavLink className="flex justify-center"
                    state={{ categorieId: categoryId, travelId: travelId }}
                    to={{ pathname: `add-income`, }}
                ><AiOutlinePlus /></NavLink>
            </td>
        </tr>
    )
}

export default BudgetDetailIncomeItem