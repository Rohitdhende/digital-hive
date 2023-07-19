import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ArticleIcon from "@mui/icons-material/Article";
import SmartToyIcon from '@mui/icons-material/SmartToy';

export const tabLinks = [
  {
    id: 0,
    text: "Dashboard",
    path: "app",
    icon: DashboardIcon,
  },
  {
    id: 1,
    text: "Calender",
    path: "calender",
    icon: CalendarMonthIcon,
  },
  {
    id: 2,
    text: "Create",
    path: "create",
    icon: AddCircleOutlineIcon,
  },
  {
    id: 3,
    text: "Report",
    path: "report",
    icon: AssessmentIcon,
  },
  {
    id: 4,
    text: "Documents",
    path: "documents",
    icon: ArticleIcon,
  },
  {
    id: 5,
    text: "Bots",
    path: "bots",
    icon: SmartToyIcon,
  },
];
