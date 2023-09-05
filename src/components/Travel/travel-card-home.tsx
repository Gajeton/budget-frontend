import { useAuth0 } from "@auth0/auth0-react";
import CardTitle from "../CardTitle/card-title";
import ProgressBarLine from "../ProgressBar/progres-bar-line";
import { createImageFromInitials, getRandomColor } from "../../utils/avatar-utils"
import { Link } from "react-router-dom";
import moment, { Moment } from "moment";
import ProgressBarCircular from "../ProgressBar/progress-bar-circular";
import { useEffect, useState } from "react";
import Avatar from "../avatar";

interface TravelCardHomeProps {
  destination: string,
  startDate: Moment,
  endDate: Moment,
  id: number
}

export const TravelCardHome = ({ destination, startDate, endDate, id } :TravelCardHomeProps) => {
    const { isAuthenticated } = useAuth0();

    return (
        <div className="flex w-full">
            <div
                role="list"
                className=" divide-gray-100 w-full [&>*:nth-child(even)]:my-2"
            >
                <Link
                    to={`travel/${id}`}
                    className="flex justify-between gap-x-6 py-2 items-center bg-[#F6F4EB] border border-gray-300 overflow-hidden rounded-sm hover:bg-[#91C8E4] p-2
            text-black font-latoBold text-lg"
                >
                    <div className="flex min-w-0 gap-x-6 items-center">
                        <Avatar initials={destination} />
                        <div className="min-w-0 flex-auto">
                            <div className="flex items-center">
                                <p className=" font-semibold leading-6  w-1/3">
                                {destination}
                                </p>
                                <span className="rounded-lg bg-slate-300 leading-none text-center p-1 text-sm text-white ml-2 ">
                                    Statut
                                </span>
                            </div>
                            <p className="mt-1 truncate text-sm leading-5 font-latoItalic ">
                                Sta. {moment(startDate).format('YYYY/MM/DD')} - End. {moment(endDate).format('YYYY/MM/DD')}
                            </p>
                        </div>
                    </div>
                    <div className="flex min-w-0 gap-x-6 items-center  ">
                        <p>Nb expenses: 30</p>
                    </div>

                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <ProgressBarCircular percentage={50} />
                    </div>
                </Link>
            </div>
        </div>
    )

};


