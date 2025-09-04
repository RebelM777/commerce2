import React from "react";
import Navbar from "./../navbar/Navbar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}
