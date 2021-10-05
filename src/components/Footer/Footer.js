import React from 'react';
import CopyrightYear from 'react-copyright-year';

const Footer = () => {
    return (
        <div className="bg-green-800 text-white pt-8 pb-3 w-full">
            <h3 className="text-2xl font-extrabold">Winsome Football Academy</h3>
            <p>Phone: 75860155254 Email: winsomeacademy.com</p>
            <p>Cathedral Road, Cardiff</p>
            <p>Wales CF11 9XR</p>
            <br />
            <p><CopyrightYear /> Winsome Football Academy</p>
        </div>
    );
};

export default Footer;