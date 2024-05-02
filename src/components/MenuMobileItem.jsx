import React from "react";
import { Link } from 'react-router-dom';

const MenuMobileItem = ({ label }) => {
    return (
        <Link to={`/${label}`} className="text-white cursor-pointer text-center hover:bg-gray-800 transition">{label}</Link>
    );
};


export default MenuMobileItem;
