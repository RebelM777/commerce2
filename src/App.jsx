import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/layout/Layout";
import NotFound from "./components/notFound/NotFound";
import AllProducts from "./components/shop/AllProducts";
import Category from "./components/shop/Category";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

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
