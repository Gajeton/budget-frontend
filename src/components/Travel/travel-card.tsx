import { useAuth0 } from "@auth0/auth0-react";
import CardTitle from "../CardTitle/card-title";
import ProgressBarLine from "../ProgressBar/progres-bar-line";
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface TravelCardProps {
    day: number,
    budget: number
}

export const TravelCard = ({ day, budget }: TravelCardProps) => {
    return (
        <div>
            <div className="flex flex-col items-center w-full">
                <CardTitle navigateUrl="../.." title={`My tavel 1`} />
                <div className=" w-full p-6 font-latoBold bg-[#F6F4EB] border border-gray-300 rounded-sm">
                    <div className=" flex justify-start items-center">
                        <h2 className="font-rocletteProBold text-base mr-5">Progression</h2>
                        <ProgressBarLine nbTotal={day} nbDone={day - moment(new Date()).day()} />
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
                            className={`h-full rounded-sm flex items-center justify-end p-1 ${(3000 / budget) * 100 < 35 ? "bg-[#FF0060]" : "bg-[#00DFA2]"
                                }`}
                        >
                            {Math.round(budget - 3000)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )

};


