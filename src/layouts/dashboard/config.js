import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AssessmentIcon from '@mui/icons-material/Assessment';

export const tabLinks = [
    {
        id:0,
        text:'Dashboard',
        path:'app',
        icon:DashboardIcon
    },
    {
        id:1,
        text:'Calender',
        path:'calender',
        icon: CalendarMonthIcon
    },
    {
        id:2,
        text:'Create',
        path:'create',
        icon:AddCircleOutlineIcon
    },
    {
        id:3,
        text:'Report',
        path:'report',
        icon:AssessmentIcon
    }
]