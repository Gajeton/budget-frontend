import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { NavLink } from "react-router-dom";

interface BudgetDetailIncomeItemProps {
    categoryId: number;
    categoryName : string
    travelId:number
    

}

interface BudgetDetailIncomeItemData {
    totalExpense: number;
    totalEstimated : number;
    balance: number;
}


const BudgetDetailIncomeItem = ({ categoryId, categoryName, travelId }: BudgetDetailIncomeItemProps) => {
    // const [pourcentage, setPourcentage] = useState((estimated/amount)*100);
    const [data, setData] = useState<BudgetDetailIncomeItemData>()
    const [loaded, setLoaded] = useState(true)
    const [error, setError] = useState()

    const { user } = useAuth0();

    // useEffect(() => {
    //     if (user) {
    //         axios.get(import.meta.env.VITE_API_URL + "entry/getEntryByTravelIdAndCategoryId/" + user.sub ,
    //         { categoryId : categoryId , travelId : travelId })
    //           .then((response) => setData(response.data))
    //           .catch((error) => setError(error.message))
    //           .finally(() => setLoaded(true));
    //       }
    //   }, []);

      if (loaded ) {
        return error ? (
          <span>Error: {error}</span>
        ) : (
        <tr>
            <td className="px-4 py-4 text-sm  whitespace-nowrap">
                {categoryName}
            </td>
            {/* <td className="px-4 py-4 text-sm  whitespace-nowrap">
                {data.totalExpense}
            </td>
            <td className="px-4 py-4 text-sm  whitespace-nowrap">
                {data.totalEstimated}
            </td>
            <td className="px-4 py-4 text-sm  whitespace-nowrap">
                {data.balance}
            </td> */}
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

export default BudgetDetailIncomeItem