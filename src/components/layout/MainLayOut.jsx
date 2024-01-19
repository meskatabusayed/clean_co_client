
import Navber from "./Navber";
import Sidebar from "./Sidebar";


const MainLayOut = ({ children }) => {
    return (
        <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
           <Navber></Navber>
          </div>
          {/* Page content here */}
          {children}
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
          <div className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
           <Sidebar></Sidebar>
          </div>
        </div>
      </div>
    );
};

export default MainLayOut;