import { NavLink } from "react-router-dom";

interface CardMonthProps {
    keyItem: string
}

const CardWeekItem = () => {

    return (
        <NavLink to={`${1}`} state={{id : 1}}  className="w-full p-4 flex-col justify-between items-center hover:bg-[#91C8E4] bg-[#F6F4EB] border border-gray-300 rounded-sm text-base">
            <div className="flex justify-between items-center">
                <h1 className="text-xl">Week 1</h1>
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

export default CardWeekItem