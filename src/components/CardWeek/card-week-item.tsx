import { NavLink } from "react-router-dom";

interface CardWeekItem { id: number, week: number, start: string, end: string, travelId : number }

export const CardWeekItem = ({ id, week, start, end, travelId }: CardWeekItem) => {

    return (
        <NavLink to={`${id}`} state={{travelId : travelId}} className="w-full p-4 flex-col justify-between items-center hover:bg-[#91C8E4] bg-[#F6F4EB] border border-gray-300 rounded-sm text-base">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <h1 className="text-xl">Week {week}</h1>
                    <p>{start.toString()} - {end.toString()}</p>
                </div>
                <div className="flex flex-col">
                    <h2>Nb of expenses<span> 15</span></h2>
                    <h2>Nb of incomes<span> 0</span></h2>
                </div>
            </div>
            <div className="mt-4 bg-[#749BC2] text-white p-2 rounded-sm flex-col">
                <h2>Total incomes<span> 0</span></h2>
                <h2>Total expenses<span> 0</span></h2>
                <h2>Balance incomes/expenses<span> 0</span></h2>
            </div>
        </NavLink>
    );
};
