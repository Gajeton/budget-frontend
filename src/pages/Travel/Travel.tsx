import { Outlet, useParams } from "react-router-dom";
import CardTitle from "../../components/CardTitle/CardTitle";
import ProgressBarLine from "../../components/ProgressBar/ProgressBarLine";
import CardMonth from "../../components/CardMonths/CardMonthItem";
import './travel.css';
import { useState } from "react";
import TravelPeriodTabs from "../../components/TravelPeriodTabs/TravelPeriodTabs";

function Travel() {
  const { id } = useParams();

  const [monthList, setMonthList] = useState([]);
  const [monthCount, setMonthCount] = useState(0);
  const [controller, setController] = useState({
    page: 0,
    rowsPerPage: 4
  });

  return (
    <div className=" w-4/5">
      <div className="flex flex-col items-center w-full">
        <CardTitle navigateUrl="../.." title={`My tavel ${id}`} />
        <div className=" w-full p-6 font-latoBold bg-[#F6F4EB] border border-gray-300 rounded-sm">
        <div className=" flex justify-start items-center">
          <h2 className="font-rocletteProBold text-base mr-5">Progression</h2>
          <ProgressBarLine nbTotal={250} nbDone={250 - 20} />
        </div>
        <div className=" flex justify-start items-center w-full mt-6">
          <h2 className="font-rocletteProBold text-base mr-5">Travel Budget</h2>
          <span className="bg-[#FCE22A] p-1 rounded-sm">10000 $</span>
        </div>
        <div className=" flex justify-start items-center w-full mt-2 ">
          <h2 className="font-rocletteProBold text-base mr-5">
            Remaining Budget
          </h2>
          <span
            className={`h-full rounded-sm flex items-center justify-end p-1 ${
              (3000 / 10000) * 100 < 35 ? "bg-[#FF0060]" : "bg-[#00DFA2]"
            }`}
          >
            3000 $
          </span>
          </div>
        </div>
     
        <div className="mt-4 w-full">
          <TravelPeriodTabs />
        </div>
      
       
      </div>
    </div>
  );
}

export default Travel;
