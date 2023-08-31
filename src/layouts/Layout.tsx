import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";


function Layout() {
  return (
    <div className="layout">
      <div className="container">
        <SideBar />
        <div className="main-container">
          <div className="main-container-child">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Layout;



  