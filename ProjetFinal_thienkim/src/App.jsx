import { useEffect, useState } from "react";
import { AuthContext } from "./context/AuthContext.js";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import "./components/Header/Header.jsx";
import "./components/Footer/Footer.jsx";
import RootLayout from "./containers/roots.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import LoginForm from "./components/LoginForm/LoginForm.jsx";
import About from "./components/About/About.jsx";
import Commander from "./components/commander/Commander.jsx";
import Signup from "./pages/Signup.jsx";
import NewReview from "./containers/NewAvis.jsx";
import Review from "./components/AvisPage/AvisPage.jsx";
import { AVIS } from "./data/avis.js";

function App() {
  const storedIsLogin = sessionStorage.getItem("isLoggedIn");
  const storedUserId = sessionStorage.getItem("userId");
  const storedUserEmail = sessionStorage.getItem("userEmail");

  const [isLoggedIn, setIsLoggedIn] = useState(storedIsLogin === "true");
  const [userId, setUserId] = useState(storedUserId);
  const [userEmail, setUserEmail] = useState(storedUserEmail);

  const savedPanier = localStorage.getItem("panier");
  const [panier, majPanier] = useState(
    savedPanier ? JSON.parse(savedPanier) : [],
  );

  useEffect(() => {
    localStorage.setItem("panier", JSON.stringify(panier));
  });


  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem("reviews");
    return savedReviews ? JSON.parse(savedReviews) : AVIS; 
  });


  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  });

  function addToPanier(name, price) {
    const currentFood = panier.find((food) => food.name === name);
    if (currentFood) {
      const panierFilterFood = panier.filter((food) => food.name !== name);

      majPanier([
        ...panierFilterFood,
        { name, price, amount: currentFood.amount + 1 },
      ]);
    } else {
      majPanier([...panier, { name, price, amount: 1 }]);
    }
  }

  function deleteItem(name) {
    const panierFilter = panier.filter((food) => food.name !== name);
    majPanier(panierFilter);
  }

  const addAvisHandler = (description) => {
    const newEntry = {
      id: Math.random().toString(), 
      description: description,
      creator: userEmail
    };

    setReviews((prevReviews) => [newEntry, ...prevReviews]);
  };
  
  const loginHandler = (uid, email) => {
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("userId", uid);
    sessionStorage.setItem("userEmail", email);
    setUserId(uid);
    setIsLoggedIn(true);
    setUserEmail(email);
  };

  const logoutHandler = () => {
    sessionStorage.setItem("userId", null);
    sessionStorage.setItem("userEmail", null);
    sessionStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    setUserId(null);
    setUserEmail(null);
  };

  const routerLoggedIn = createBrowserRouter([
    {
      path: "/",
      element: (
        <RootLayout
          panier={panier}
          majPanier={majPanier}
          addToPanier={addToPanier}
          deleteItem={deleteItem}
          addAvis={addAvisHandler}
        />
      ),
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <About></About> },
        { path: "/order", element: <Commander></Commander> },
        { path : "/review", element: <Review items={reviews}/>},
        { path : "/review/new", element: <NewReview></NewReview>},
      ],
    },
  ]);

  const routerNotLoggedIn = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout
          panier={panier}
          majPanier={majPanier}
          addToPanier={addToPanier}
          deleteItem={deleteItem}
        />,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        { path: "", element: <About></About> },
        { path: "/order", element: <Commander></Commander> },
        { path : "/review", element: <Review items={reviews}/>},
        { path : "/review/new", element: <NewReview></NewReview>},
        { path: "/login", element: <LoginForm></LoginForm> },
        { path: "/signup", element: <Signup></Signup> },
      ],
    },
  ]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        email: userEmail,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      <RouterProvider
        router={isLoggedIn ? routerLoggedIn : routerNotLoggedIn}
      ></RouterProvider>
    </AuthContext.Provider>
  );
}

export default App;
