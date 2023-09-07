import { NavLink, Outlet } from "react-router-dom";

export const TravelPeriodTabs = () => {

  const navLinkCssClasses = ({ isActive }: { isActive: boolean}): string => {
    return ` ${isActive ? "bg-[#4682A9]" : ""
      } hover:bg-[#4682A9] flex h-full justify-center items-center`;
  };

  
  return (
    <>
      <div className=" flex flex-col  mt-2 bg-[#91C8E4] border-gray-300 border rounded-sm">
        <div className="grid grid-cols-3 text-center h-10 text-lg items-center">
          {/* <NavLink to="month" className={navLinkCssClasses}>
            Months
          </NavLink> */}
          <NavLink to="week" className={navLinkCssClasses}>
            Weeks
          </NavLink>
          {/* <NavLink to="day" className={navLinkCssClasses}>
            Days
          </NavLink> */}
        </div>
      </div>
      <div className="mt-4">
        <Outlet />
      </div>
    </>
  );
}


