import React from 'react';
import CopyrightYear from 'react-copyright-year';
// import './Footer.css'

const Footer = () => {
    return (
        <div className="footer bg-gradient-to-t from-green-400 via-green-100 to-green-100 pt-8 pb-3 w-full">
            <h3 className="text-2xl font-bold">Winsome Football Academy</h3>
            <p>Phone: 75860155254 Email: winsomeacademy.com</p>
            <p>Cathedral Road, Cardiff</p>
            <p>Wales CF11 9XR</p>
            <br />
            <p><CopyrightYear /> Winsome Football Academy</p>
        </div>
    );
};

export default Footer;