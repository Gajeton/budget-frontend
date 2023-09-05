import { NavLink, Outlet } from "react-router-dom";
import CardTitle from "../../components/CardTitle/card-title";


export const Admin = () => {
  return (
    <>
      <div className="flex flex-col items-center w-4/5">
        <CardTitle navigateUrl=".." title="January" />
        <div className="grid  justify-center grid-cols-2 gap-24">
          <NavLink
          to={"destination"}
          className="bg-black text-white p-2 rounded-md text-xl"
        >
          <div>Add destination</div>
        </NavLink>
          <NavLink
            to={"expense"}
            className="bg-black text-white p-2 rounded-md text-xl"
          >
            <div>Add an expense category</div>
          </NavLink>
          <NavLink
            to={"income"}
            className="bg-black text-white p-2 rounded-md text-xl"
          >
            <div>Add an income category</div>
          </NavLink>
        </div>
        <div className="mt-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default Admin;



  