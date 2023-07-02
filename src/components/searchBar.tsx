import React from "react";
import { useState, useEffect } from "react";

// https://api.github.com/users/
//Bunun sonuna ekliyosun gelen input u, ama usestate e eklerken trimleyip edge case leri unutma

const SearchBar = () => {
  return (
    <div className="flex flex-col">
      <h2>dev finder</h2>
      <form action="GET" method="get" className="flex gap-2">
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="Search GitHub username..."
          className=" w-[400px]"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
