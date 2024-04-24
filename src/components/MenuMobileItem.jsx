import React from "react";

const MenuMobileItem = ({ label }) => {
    return (
        <div className="text-white cursor-pointer text-center hover:bg-gray-800 transition">
            {label}
        </div>
    );
};


export default MenuMobileItem;
