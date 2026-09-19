import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Notfound from "./Component/Notfound/Notfound";
import Layout from "./Component/Layout/Layout";
import Blog from "./Component/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "about", element: <About /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
