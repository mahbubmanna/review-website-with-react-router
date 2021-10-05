import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "rgba(245, 158, 11, var(--tw-bg-opacity))"
    }

    return (
        <div className="bg-green-800 text-white pt-8 pb-2 mb-5 w-full">
            <h1 className="text-5xl pb-3 text-yellow-500 font-extrabold">Winsome Football Academy</h1>
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