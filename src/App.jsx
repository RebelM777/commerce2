import "./App.css";
import Home from "./pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";
import AllProducts from "./Components/Shop/AllProducts";
import Category from "./Components/Shop/Category";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "shop",
          element: <Shop />,
          children: [
            { index: true, element: <AllProducts /> },
            { path: ":category", element: <Category /> },
          ],
        },
        { path: "product/:id", element: <ProductDetails /> },
        { path: "about", element: <About /> },
        { path: "cart", element: <Cart /> },
        { path: "*", element: <NotFound /> },
      ],
      
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
