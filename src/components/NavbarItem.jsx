import React from 'react';
import { Link } from 'react-router-dom';

const NavbarItem = ({label}) => {
    return (
        <ul >
             <Link to={`/${label}`} className="text-white cursor-pointer hover:text-gray-500 transition">{label}</Link>
        </ul>
    )
}

export default NavbarItem;