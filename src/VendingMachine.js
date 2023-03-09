import React from "react";
import { NavLink } from "react-router-dom";

function VendingMachine() {
    return (
        <nav className="VendingMachine">
            <NavLink exact to="/chips">
                Chips
            </NavLink>
            <NavLink exact to="/cookies">
                Cookies
            </NavLink>
            <NavLink exact to="/candy">
                Candy
            </NavLink>
        </nav>
    )
}

export default VendingMachine;

