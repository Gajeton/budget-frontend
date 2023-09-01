import { NavLink } from "react-router-dom";

interface CardMonthItemrops {
    keyItem: string,
    title:string
}

const CardMonthItem = ({keyItem, title} : CardMonthItemrops) => {

    return (
      <NavLink to={`${1}`} state={{id : 1}} className="bg-[#F6F4EB] border border-gray-300 rounded-sm hover:bg-[#91C8E4] p-6" key={keyItem}>
        <div className="flex justify-between w-full items-center">
          <h1 className="text-2xl">{}</h1>
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