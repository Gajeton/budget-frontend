import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { NavLink } from "react-router-dom";

interface BudgetDetailExpenseItemProps {
    categoryId: number;
    categoryName : string
    travelId:number
    entrysAmount: number
    countEntrys:number
}


const BudgetDetailExpenseItem = ({ categoryId, categoryName, travelId, entrysAmount, countEntrys }: BudgetDetailExpenseItemProps) => {

    return (
        <tr>
           <td className="px-4 py-4 text-sm  whitespace-nowrap">
                {categoryName}
            </td>
            <td className="px-4 py-4 text-sm  whitespace-nowrap">
                {entrysAmount}
            </td>
            <td className="px-4 py-4 text-sm  whitespace-nowrap">
                {countEntrys}
            </td>
            <td className="px-4 py-4 text-sm  whitespace-nowrap">
                <NavLink className="flex justify-center"
                    state={{ categorieId : categoryId, travelId : travelId  }}
                    to={{pathname : `add-expense`,}}
                ><AiOutlinePlus /></NavLink>
            </td>
        </tr>
       );

}

export default BudgetDetailExpenseItem