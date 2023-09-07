import moment, { Moment } from "moment";
import CardTitle from "../CardTitle/card-title";
import ProgressBarLine from "../ProgressBar/progres-bar-line";

interface TravelCardProps {
    day: number,
    budget: number,
    totalBudget: number,
    startDate: Moment,
    endDate: Moment,
    id: number
}

export const TravelCard = ({ day, budget, totalBudget, startDate, endDate, id }: TravelCardProps) => {
    return (
        <div>
            <div className="flex flex-col items-center w-full">
                <CardTitle navigateUrl="../.." title={`My tavel ${id}`} />
                <div className=" w-full p-6 font-latoBold bg-[#F6F4EB] border border-gray-300 rounded-sm">
                <p className="mb-2">Sta. {moment(startDate).format('YYYY/MM/DD')} - End. {moment(endDate).format('YYYY/MM/DD')}</p>
                    <div className=" flex justify-start items-center">
                        <h2 className="font-rocletteProBold text-base mr-5">Progression</h2>
                        <ProgressBarLine nbTotal={day} nbDone={moment().diff(moment(startDate), 'days')} />
                    </div>
                    <div className=" flex justify-start items-center w-full mt-6">
                        <h2 className="font-rocletteProBold text-base mr-5">Travel Budget</h2>
                        <span className="bg-[#FCE22A] p-1 rounded-sm">{budget}</span>
                    </div>
                    <div className=" flex justify-start items-center w-full mt-2 ">
                        <h2 className="font-rocletteProBold text-base mr-5">
                            Remaining Budget
                        </h2>
                        <span
                            className={`h-full rounded-sm flex items-center justify-end p-1 ${(totalBudget / budget) * 100 < 35 ? "bg-[#FF0060]" : "bg-[#00DFA2]"
                                }`}
                        >
                            {Math.round(budget - totalBudget)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )

};


