import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <header className="flex justify-between items-center bg-header-black text-white p-4">
      <Link to="/" className="flex text-2xl font-bold">
        <img src="/images/icon/redFilm.svg" className="pr-2" alt="Logo" />
        Weekly Flicks
      </Link>
      <NavBar />
    </header>
  );
};
