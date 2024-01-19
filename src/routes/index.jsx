import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../page/About";
import Contact from "../page/Contact";
import Login from "../page/Login";
import Register from "../page/Register";
import AdminLayout from "../components/layout/AdminLayout";
import AddService from "../page/AddService";
import Home from "../page/Home";
import PrivateROute from "./PrivateROute";


const routes = createBrowserRouter([
    {
        path:'/',
        element: <App></App>,
        children: [
            {
                index: true,
                element: <Home></Home>

            },
            {
                path: 'about',
                element: <PrivateROute><About></About></PrivateROute>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/admin',
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                index: true,
                element: <AddService></AddService>
            }
        ]
    }
]);


export default routes;