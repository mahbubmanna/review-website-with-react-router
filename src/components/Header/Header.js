import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
    }

    return (
        <div className="bg-gradient-to-b from-green-400 via-green-100 to-green-100 text-blck pt-8 py-2 mb-10 w-full">
            <h1 className="text-7xl pb-3 text-black font-bold">Winsome Football Academy</h1>
            <nav>
                <NavLink className="p-3" activeStyle={activeStyle} to="/home">Home</NavLink>
                <NavLink className="p-3" activeStyle={activeStyle} to="/services">Services</NavLink>
                <NavLink className="p-3" activeStyle={activeStyle} to="/facilities">Facilities</NavLink>
                <NavLink className="p-3" activeStyle={activeStyle} to="/about">About</NavLink>
            </nav>
        </div>
    );
};

export default Header;