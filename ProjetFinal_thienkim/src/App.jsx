import './App.css'
import "./components/Header/Header.jsx";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import RootLayout from "./containers/roots.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import LoginForm from './components/LoginForm/LoginForm.jsx';
import { useState } from 'react';
import { AuthContext } from './context/AuthContext.js';

import Signup from './pages/Signup.jsx';

const routerLoggedIn = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // { path : "", element: <About></About>},
      // { path : "add", element: <Order></Order>},
      // { path : "/review", element: <Review></Review>},
      // { path : "/review/new", element: <NewReview></NewReview>},
      { path : "/login", element: <Navigate to="/" replace />},
    ],
  },
]);

const routerNotLoggedIn = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // { path: "", element: <About></About> },
      { path: "/login", element: <LoginForm></LoginForm>},
      { path: "/signup", element: <Signup></Signup>},
    ],
  },
]);

function App() {
  const storedIsLogin = sessionStorage.getItem("isLoggedIn");
  const storedUserId = sessionStorage.getItem("userId");
  const storedUserEmail = sessionStorage.getItem("userEmail");

  const [isLoggedIn, setIsLoggedIn] = useState(storedIsLogin === "true");
  const [userId, setUserId] = useState(storedUserId);
  const [userEmail, setUserEmail] = useState(storedUserEmail);

  const loginHandler = (uid, email) => {
    sessionStorage.setItem("isLoggedIn", "true")
    sessionStorage.setItem("userId", uid)
    sessionStorage.setItem("userEmail", email)
    setUserId(uid);
    setIsLoggedIn(true);
    setUserEmail(email);
  }

  const logoutHandler = () => {
    sessionStorage.setItem("userId", null)
    sessionStorage.setItem("userEmail", null)
    sessionStorage.setItem("isLoggedIn", "false")
    setIsLoggedIn(false);
    setUserId(null);
    setUserEmail(null);
  }

  return (
    <AuthContext.Provider
      value = {{
        isLoggedIn: isLoggedIn,
        userId: userId,
        email: userEmail,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      <RouterProvider router={isLoggedIn ? routerLoggedIn : routerNotLoggedIn}></RouterProvider>
    </AuthContext.Provider>
  )
}

export default App
