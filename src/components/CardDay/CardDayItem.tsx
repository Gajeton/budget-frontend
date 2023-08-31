import { NavLink } from "react-router-dom";

interface CardMonthProps {
    keyItem: string
}

const CardDayItem = () => {

    return (
        <NavLink to={`${1}`} state={{id : 1}} className="w-full p-1 flex justify-between items-center hover:bg-[#91C8E4] bg-[#F6F4EB] border border-gray-300 rounded-sm">
            <div>
                <h1 className=" text-xl">Jour 1</h1>
                <h2>Balance incomes/expenses<span> 0</span></h2>
            </div>
            <div className="flex flex-col">
                <h2>Nb of expenses<span> 15</span></h2>
                <h2>Nb of incomes<span> 0</span></h2>
            </div>

            <div className="flex flex-col bg-[#749BC2] text-white p-1 rounded-sm">
                <h2>Total incomes<span> 0</span></h2>
                <h2>Total expenses<span> 0</span></h2>
            </div>
        </NavLink>
    );
};

export default CardDayItem