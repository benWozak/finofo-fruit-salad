import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="px-8 py-4 flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
