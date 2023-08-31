import { NavLink } from "react-router-dom";
import CardMonthItem from "./CardMonthItem";
import WeekItem from "./CardWeekItem";

interface CardMonthProps {
  keyItem: string
}

const CardWeek = () => {

  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-2">
        {[
          "week 1",
          "week 1",
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
      <div className="my-4"></div>
    </div>
  );
};

export default CardWeek