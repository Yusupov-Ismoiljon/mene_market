import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ReactLayouts from "./layouts/ReactLayouts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";


export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<ReactLayouts />}>
        <Route index element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />

        <Route path="*" element={<NotFound />} />

      </Route>
    )
  );

  return (
    <div className="font-inter">
      <RouterProvider router={router} />
    </div>
  );
}
