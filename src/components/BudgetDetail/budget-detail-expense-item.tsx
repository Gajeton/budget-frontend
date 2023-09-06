import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { NavLink } from "react-router-dom";

interface BudgetDetailExpenseItemProps {
    categoryId: number;
    categoryName : string
    travelId:number
}



export interface BudgetDetailExpenseItemData {
    data: {
        categoryExpenseId: number,
        travelId: number,
        categoryTitle: string,
        entrysAmount: number
    }
    count: number
}


const BudgetDetailExpenseItem = ({ categoryId, categoryName, travelId }: BudgetDetailExpenseItemProps) => {
    // const [pourcentage, setPourcentage] = useState((estimated/amount)*100);
    const [data, setData] = useState<BudgetDetailExpenseItemData>()
    const [loaded, setLoaded] = useState(true)
    const [error, setError] = useState()

    const { user } = useAuth0();

    useEffect(() => {
        if (user) {
            axios.get(import.meta.env.VITE_API_URL + "entry/getEntryByCategoryExpenseAndTravelId/" + categoryId + "/" + travelId)
              .then((response) => setData(response.data))
              .catch((error) => setError(error.message))
              .finally(() => setLoaded(true));
          }
      }, []);

      if (loaded && data) {
        return error ? (
          <span>Error: {error}</span>
        ) : (
        <tr>
           <td className="px-4 py-4 text-sm  whitespace-nowrap">
                {categoryName}
            </td>
            <td className="px-4 py-4 text-sm  whitespace-nowrap">
                {data.data.entrysAmount}
            </td>
            <td className="px-4 py-4 text-sm  whitespace-nowrap">
                {data.count}
            </td>
            <td className="px-4 py-4 text-sm  whitespace-nowrap">
       
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
    return <span>Loading...</span>;

}

export default BudgetDetailExpenseItem