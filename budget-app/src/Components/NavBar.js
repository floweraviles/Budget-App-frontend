import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {

    return (
        <nav className="navbar">
            <NavLink to="/transactions">Transactions</NavLink>
            <NavLink to="/transaction/new">New Transaction</NavLink>
        </nav>
    );
};

export default NavBar;