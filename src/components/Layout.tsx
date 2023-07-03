import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <div className="bg-[#f7f8f9]">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
