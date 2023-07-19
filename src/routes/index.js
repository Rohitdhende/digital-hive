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
import Home from "../pages/Home";
import EnterPriseLogin from "../pages/Login";
import TRPasGroup from "../pages/TrpAsGroup";
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/enterprise-login",
      element: <EnterPriseLogin />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "app", element: <DashboardAppPage /> },
        {
          path: "calender",
          element: <CalenderPage />,
          children: [
            {
              path: "trp",
              element: <TRPasGroup />,
            },
          ],
        },
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
