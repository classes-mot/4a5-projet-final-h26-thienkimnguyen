import './App.css'
import "./components/Header/Header.jsx";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import RootLayout from "./containers/roots.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const routerLoggedIn = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
    //   { path : "", element: <about></about>}
    //   { path : "add", element: <order></oder>}
    //   { path : "review, element: <review></review>"}
    //   { path : "login", element: <Navigate to="/" replace>}
    ],
  },
]);

function App() {

  return (
    <>
    <RouterProvider router={routerLoggedIn}></RouterProvider>
      
    </>
  )
}

export default App
