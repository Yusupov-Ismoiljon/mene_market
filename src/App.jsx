import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ReactLayouts from "./layouts/ReactLayouts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound"
import CardDataNew from './pages/CardDataNew';




export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<ReactLayouts searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}>
        <Route index element={<Home searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/newproduct/:id" element={<CardDataNew />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<PageNotFound />} />

      </Route>
    )
  );

  return (
    <div className="font-inter">
      <RouterProvider router={router} />
    </div>
  );
}
