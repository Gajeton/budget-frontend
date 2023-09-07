import { Moment } from "moment";
import { NavLink } from "react-router-dom";

interface CardMonthItemProps {id : number , month : string}

export const CardMonthItem = ( {id, month} : CardMonthItemProps) => {
    
    return (
      <NavLink to={`${id}`} className="bg-[#F6F4EB] border border-gray-300 rounded-sm hover:bg-[#91C8E4] p-6" key={id}>
        <div className="flex justify-between w-full items-center">
          <h1 className="text-2xl">{month}</h1>
          <div className="flex flex-col">
            <h2>Nb of expenses : 20</h2>
            <h2>Nb of incomes : 2</h2>
          </div>
        </div>
        <div className="mt-4 bg-[#749BC2] text-white p-2 rounded-sm">
          <h2>Total incomes : 320$</h2>
          <h2>Total expenses : 800$</h2>
          <h3>Balance incomes/expenses : {800 - 320}</h3>
        </div>
      </NavLink>
    );
};

export default CardMonthItem