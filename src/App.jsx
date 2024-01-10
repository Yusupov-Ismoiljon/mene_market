import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ReactLayouts from "./layouts/ReactLayouts";
import Home from "./components/Home";


export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<ReactLayouts />}>
        <Route path="/" element={<Home />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
