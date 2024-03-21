import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./Layout/Layout";
import Login from "./pages/Login/Login";
import Other from "./pages/Other/Other";
import Products from "./pages/Products/Products";
import AddProducts from "./pages/Add/Add";
import Brands from "./pages/Brands/Brands";
import Banners from "./pages/Banners/Banners";
// import Orders from "./pages/Orders/Orders";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";
import Orders from "./pages/Orders/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "other",
        element: <Other />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "products/addproducts",
        element: <AddProducts />,
      },
      {
        path: "brands",
        element: <Brands />
      },
      {
        path: "banners",
        element: <Banners />
      },
      {
        path: "orders",
        element: <Orders />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "editprofile",
        element: <EditProfile />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
