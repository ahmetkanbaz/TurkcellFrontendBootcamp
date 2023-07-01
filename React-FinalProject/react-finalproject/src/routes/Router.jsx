import { useRoutes } from "react-router-dom";
import Home from '../views/Home/Home'
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import AllProducts from "../views/AllProducts/AllProducts";
import DetailProductPage from "../views/DetailProductPage/DetailProductPage";
import Cart from "../views/Cart/Cart";

const Router = () => {
  const routes = useRoutes([
    {path: '/', element: <DashboardLayout />, children: [
      {path: '/', element: <Home />},
      {path: '/products', element: <AllProducts />},
      {path: '/detailproduct/:id', element: <DetailProductPage />},
      {path: '/cart/:id', element: <Cart />},
      {path: '/auth/login', element: <Login />},
      {path: '/auth/register', element: <Register />}
    ]}
  ])
  return routes
}

export default Router