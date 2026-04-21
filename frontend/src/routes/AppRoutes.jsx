import MainLayout from "../layout/MainLayout";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import ContactPage from "../pages/ContactPage";
import EditProfile from "../pages/EditProfile";
import MyPasses from "../pages/MyPasses";
import ProfilePage from "../pages/ProfilePage";
import SignupPage from "../pages/SignupPage";
import SuccessPage from "../pages/SuccessPage";
import ViewPass from "../pages/ViewPass";
import FormPage from "../pages/FormPage";

const AppRoutes = [
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <LoginPage/>
            },
            {
                path: '/landing-page',
                element: <LandingPage/>
            },
            {
                path:"/contact",
                element: <ContactPage/>
            },
            {
                path:"/edit-profile",
                element: <EditProfile/>
            },
            {
                path:"/my-passes",
                element: <MyPasses/>
            },
            {
                path:"/profile",
                element: <ProfilePage/>
            },
            {
                path:"/signup",
                element: <SignupPage/>
            },
            {
                path:"/success",
                element: <SuccessPage/>
            },
            {
                path:"/view-pass",
                element: <ViewPass/>
            },
            {
                path:"/form",
                element: <FormPage/>
            }
        ]
    }
]
export default AppRoutes


