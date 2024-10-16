import React from "react";
import AppRoute from "./routes/AppRoute";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
    <ToastContainer/>
    <AppRoute/>
    </>
  )
}
