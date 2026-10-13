import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";
import { Layout } from "./ui/Layout.jsx";
import { Dashboard } from "../pages/Dashboard/ui/Dashboards.js";
import { Deals } from "../pages/Deals/Deals.js";
import { Project } from "../pages/Project/Project.js";
import { Leads } from "../pages/Leads/Leads.js";
import { ROUTES } from "./ui/Sidebar/links/Links.ts";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: ROUTES.deals, element: <Deals /> },
      { path: ROUTES.projects, element: <Project /> },
      { path: ROUTES.leads, element: <Leads /> },
    ],
  },
] satisfies RouteObject[];

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
