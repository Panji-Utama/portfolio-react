import React from "react";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex items-center justify-center bg-darker-navy">
        <h1 className="text-3xl font-bold text-white text-center">
          Ini page contact
        </h1>
      </div>
    </div>
  );
}
