import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "../layouts/dashboard";
//
import DashboardAppPage from "../pages/DashboardApp";
import CreatePage from "../pages/Create";
import CalenderPage from "../pages/Calender";
import ReportPage from "../pages/Report";
import BasicInfo from "../pages/Create/BasicInfo";
import ClientAccess from "../pages/Create/ClientAccess";
import FirmAccess from "../pages/Create/FirmAccess";
import Login from "../pages/Login";
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element:<Login/>
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "app", element: <DashboardAppPage /> },
        { path: "calender", element: <CalenderPage /> },
        {
          path: "create",
          element: <CreatePage />,
          children: [
            {
              element: <Navigate to="/dashboard/create/basic-info" />,
              index: true,
            },
            { path: "basic-info", element: <BasicInfo /> },
            { path: "client-access", element: <ClientAccess /> },
            { path: "firm-access", element: <FirmAccess /> },
          ],
        },
        { path: "report", element: <ReportPage /> },
      ],
    },
  ]);

  return routes;
}
