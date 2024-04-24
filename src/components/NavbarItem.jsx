import React from 'react';

const NavbarItem = ({label}) => {
    return (
        <ul >
            <a className="text-white cursor-pointer hover:text-gray-500 transition" href={label}> 
            {label}
            </a>
        </ul>
    )
}

export default NavbarItem;