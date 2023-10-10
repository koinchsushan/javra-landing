import Form from "./components/Form";
import LandingPage from "./pages";

const RouteObj = [
    {
        path: "/",
        component: Form,
    },
    {
        path: "/home",
        component: LandingPage,
    },
]
export default RouteObj;