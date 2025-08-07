// src/app/ClientProviders.tsx
"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ClientProviders() {
  return <ToastContainer position="top-center" autoClose={2500} />;
}
