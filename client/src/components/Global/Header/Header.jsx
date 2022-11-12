import React from "react";
import { Advertising } from "./Advertising/Advertising";
import { Filters } from "./Filters/Filters";
import { NavBar } from "./NavBar/NavBar";
import { SearchBar } from "./SearchBar/SearchBar";

export const Header = () => {
  
  return (
    <header
      className="header-index container-header"
    >
      <NavBar />
      <Advertising />
      <SearchBar />
      {/* <Filters /> */}
    </header>
  );
};
