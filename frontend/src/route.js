import react from "react";
import App from "./App";
import Movielist from "./pages/Movielist";
import Signup from "./components/Signup";
import BookSeat from "./components/BookSeat";
import PayFinal from "./pages/PayFinal";
const Routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/movielist/:id",
    element: <Movielist />,
  },
  {
    path: "/booking",
    element: <BookSeat />,
  },
  {
    path: "/payment",
    element: <PayFinal />,
  },
];

export default Routes;
