import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="mx-auto max-w-[1370px]">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
