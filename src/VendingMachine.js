import React from "react";
import { NavLink } from "react-router-dom";
import "./VendingMachine.css"

function VendingMachine() {
    return (
        <nav className="VendingMachine">
            <h1>Which snack to choose?</h1>
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

