import React from "react";
import { Link, Outlet } from "react-router";
import Sidebar from "../components/Shop/Sidebar";

export default function Shop() {
  return (
    <section className=" my-8">
      <section className="flex gap-6">
        <Sidebar />
        <section className="p-8 flex-grow border-2 border-green-900 rounded-2xl shadow-2xl bg-white">
          <Outlet />
        </section>
      </section>
    </section>
  );
}
