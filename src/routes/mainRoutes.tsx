import {createBrowserRouter} from 'react-router-dom'
import Layout from '../components/block/Layout'
import LandingPage from '../pages/LandingPage'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

export const mainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path: "/signin",
                element: <SignIn />
            },
            {
                path: "/signup",
                element: <SignUp />
            }
        ]
    }
])
