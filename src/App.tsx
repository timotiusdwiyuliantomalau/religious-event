import { createHashRouter, RouterProvider } from "react-router-dom";
import PentecostModern from "./components/pages";
import RegistrationSystem from "./components/fragments/RegisterPage";
const router = createHashRouter([
  {
    path: "/",
    element: <PentecostModern />,
  },
  {
    path: "/register",
    element: <RegistrationSystem />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
