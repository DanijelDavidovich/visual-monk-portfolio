import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/home/HomePage";
import AboutMe from "./pages/aboutMe/AboutMe";
import { Fragment } from "react";
import Navigation from "./components/Navigation";
import Gallery from "./pages/gallery/Gallery";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import RootLayout from "./pages/rootLayout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/home", element: <HomePage /> },
      { path: "/about-me", element: <AboutMe /> },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <Fragment>
      {/* <img /> */}
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
