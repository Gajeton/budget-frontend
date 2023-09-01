import { useAuth0 } from "@auth0/auth0-react";
import CardTitle from "../CardTitle/CardTitle";
import ProgressBarLine from "../ProgressBar/ProgressBarLine";
import moment from "moment";
import { CurrencyInfo, currencyInfo } from "../../enums/currency.enum";

interface TravelCardProps {
    destination: string,
    day: number,
    travelBudget: number
  }

export const TravelCard = ({...data} : TravelCardProps) => {
    const { isAuthenticated } = useAuth0();
    return (
        <div className=" w-4/5">
            <div className="flex flex-col items-center w-full">
                <CardTitle navigateUrl="../.." title={`My tavel 1`} />
                <div className=" w-full p-6 font-latoBold bg-[#F6F4EB] border border-gray-300 rounded-sm">
                    <div className=" flex justify-start items-center">
                        <h2 className="font-rocletteProBold text-base mr-5">Progression</h2>
                        <ProgressBarLine nbTotal={data.day} nbDone={data.day - moment(new Date()).day()} />
                    </div>
                    <div className=" flex justify-start items-center w-full mt-6">
                        <h2 className="font-rocletteProBold text-base mr-5">Travel Budget</h2>
                        <span className="bg-[#FCE22A] p-1 rounded-sm">{data.travelBudget}{currencyInfo.EUR.symbol}</span>
                    </div>
                    <div className=" flex justify-start items-center w-full mt-2 ">
                        <h2 className="font-rocletteProBold text-base mr-5">
                            Remaining Budget
                        </h2>
                        <span
                            className={`h-full rounded-sm flex items-center justify-end p-1 ${(3000 / data.travelBudget) * 100 < 35 ? "bg-[#FF0060]" : "bg-[#00DFA2]"
                                }`}
                        >
                            {Math.round(3000 / data.travelBudget)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )

};


