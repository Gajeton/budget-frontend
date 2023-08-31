import { NavLink } from "react-router-dom";
import CardMonthItem from "./CardMonthItem";
import WeekItem from "./CardDayItem";

interface CardMonthProps {
    keyItem: string
}

const CardDay = () => {

    return (
      <div className="w-full">
        <div className="flex flex-col [&>*:nth-child(even)]:my-1">
          {[
            "week 1",
            "week 1",
            "week 1",
            "week 1",
            "week 1",            
            "week 1",            

            
          ].map((res) => {
            return <WeekItem />;
          })}
        </div>

      </div>
    );
};

export default CardDay