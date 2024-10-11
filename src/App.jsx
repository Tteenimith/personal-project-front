import React from "react";
import AppRoute from "./routes/AppRoute";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/auth/Login";

export default function App() {
  return (
    <>
    <ToastContainer/>
    <AppRoute/>
    </>
  )
}
