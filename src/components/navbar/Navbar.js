import "./Navbar.css";
import { ShoppingCart } from 'phosphor-react';
import { NavLink } from "react-router-dom";

export const Navbar = () =>{
    return(
        <div className='navbar'>
            <div className='links'>
                <NavLink to="/">Products</NavLink>
                <NavLink to="/cart">
                    <ShoppingCart size={32}></ShoppingCart>
                </NavLink>
            </div>
        </div>
    );
}

