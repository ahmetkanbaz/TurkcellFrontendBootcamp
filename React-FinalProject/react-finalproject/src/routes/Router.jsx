import { useRoutes } from "react-router-dom";
import Home from '../views/Home/Home'
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import AllProducts from "../views/AllProducts/AllProducts";

const Router = () => {
  const routes = useRoutes([
    {path: '/', element: <DashboardLayout />, children: [
      {path: '/', element: <Home />},
      {path: '/products', element: <AllProducts />}
    ]},
    {path: '/auth', element: <AuthLayout />, children: [
      {path: '/auth/login', element: <Login />},
      {path: '/auth/register', element: <Register />}
  ]}
  ])
  return routes
}

export default Router