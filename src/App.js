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
import ErrorPage from "./pages/errors/ErrorPage";
import ConceptArt from "./pages/gallery/galleryCategories/conceptArt/ConceptArt";
import Brending from "./pages/gallery/galleryCategories/brending/Brending";
import Logos from "./pages/gallery/galleryCategories/logos/Logos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about-me", element: <AboutMe /> },
      {
        path: "/gallery",
        element: <Gallery />,
        children: [
          {
            path: "/gallery/conceptArt",
            element: <ConceptArt />,
          },
          { path: "/gallery/brending", element: <Brending /> },
          { path: "/gallery/logos", element: <Logos /> },
        ],
      },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} className="root-content" />
    </Fragment>
  );
}

export default App;
