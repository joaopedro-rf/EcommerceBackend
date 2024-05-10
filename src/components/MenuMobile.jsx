import React from "react";
import MenuMobileItem from "./MenuMobileItem";

const MenuMobile = ({visible}) => {
    if(!visible) return null;

    return (
        <div className="w-56 absolute top-8 right-0 py-5 flex-col border border-zinc-800 flex bg-black">
            <div className="flex flex-col gap-4 px-3">
                <MenuMobileItem label="Home" />
                <MenuMobileItem label="Cart" />
                <MenuMobileItem label="Shop" />

            </div>
        </div>
    )
}

export default MenuMobile;