import React from "react";
import VendingMachine from "./VendingMachine";

import { Link } from "react-router-dom";

function Candy() {
    return (
        <div>
            <h1>Yummy, candy!!</h1>
            <Link to="/">Back to the Vending Machine</Link>
        </div>
    );
};

export default Candy;