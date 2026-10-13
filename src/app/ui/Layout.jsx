import { Header } from "./Header/Header.jsx";
import Sidebar from "./Sidebar/Sidebar.js";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <main className="h-screen flex">
      <div className="shrink-0 flex flex-col">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col min-w-0">
        <div className="shrink-0 flex items-center box-border w-full">
          <Header />
        </div>
        <div className="flex flex-1 min-h-0 flex-col p-3">
          <Outlet/>
        </div>
      </div>
    </main>
  );
};
