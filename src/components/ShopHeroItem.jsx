import React from 'react';

const ShopHeroItem = ({ label, price, image }) => {
    return (
        <div className="w-80 h-96 bg-gray-200 flex flex-col justify-center items-center">
            <img src={image} alt="product" className="w-40 h-40" />
            <div className="text-center">
                <h1>{label}</h1>
                <p>{price}</p>
            </div>
        </div>
    );

};

export default ShopHeroItem;