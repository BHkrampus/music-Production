import React from "react";
import { NavLink } from "react-router-dom";

function Artist() {
  return (
    <>
      <div className="text-7xl  flex p-3 w-4/5 m-9 rounded-xl shadow-xl bg-gradient-to-t from-rose-500 to-fuchsia-500">
        <h1>Welcome Artist_name</h1>
      </div>
      <div>
        <nav>
          <ul className="text-5xl  flex p-3 w-4/6 my-4 mx-9 rounded-xl shadow-xl bg-gradient-to-t from-rose-500 to-fuchsia-500">
            <li>
              <NavLink to="/BudgetMusic">Music In Budget</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Artist;
