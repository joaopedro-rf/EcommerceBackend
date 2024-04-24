import React from "react";

const CartModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center h-screen mt-4 mx-4 text-center mobile:block mobile:p-0">
        <div
          className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
          aria-hidden="true"
        />
        <span
          className="hidden mobile:inline-block mobile:align-middle mobile:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block bg-white align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all mobile:my-8 mobile:align-middle mobile:max-w-[90%] tablet:max-w-lg ">
          <div className="px-4 pt-5  mobile:p-6">
            <p className="text-lg text-black font-semibold">{data.name}</p>
            <img
              src={data.imageUrl} 
              alt={data.name}
              className="left-0 w-full tablet:h-72 h-44 object-contain mb-4"
            />

            <p className="text-sm text-black  mb-4">{data.description}</p>
            <div className="flex flex-row items-center">
              <p className="text-2xl text-lightbrown font-bold">${data.price}</p>
              <div className="flex flex-row ml-auto">
                <button type="button" className="rounded-md border text-2xl
                border-transparent 
                shadow-sm  w-10  h-10
                bg-red-600 text-white 
                hover:bg-red-700 
                ">-</button>
                <p className="text-xl text-black py-2 px-2">12  </p>
                <button className="rounded-md border text-2xl
                border-transparent 
                shadow-sm  w-10  h-10
                bg-blue-600 text-white 
                hover:bg-blue-700 ">+</button>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 mobile:px-6 mobile:flex mobile:flex-row-reverse">
            <button
              type="button"
              className="font-medium rounded-md border 
              border-transparent shadow-sm px-4 py-2 bg-red-600 
              text-white hover:bg-red-700 focus:outline-none 
             
              mobile:ml-3 mobile:w-auto mobile:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
