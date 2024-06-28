import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="flex mr-4">
      <Link to="/Login">login</Link>
    </nav>
  );
};
