import React,{useState} from 'react'
import { BsCaretDownFill } from "react-icons/bs";
const ShopFilter = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="desktop:min-w-72 ml-12 max-w-72">
        <button
          className="flex items-center border-b border-gray-200 justify-between w-full py-4 px-6 text-left text-base font-medium leading-6 text-white hover:text-gray-500 "
          onClick={handleToggle}
          aria-expanded={isOpen}
        >
          <span>{title}</span>
           <BsCaretDownFill className={`h-6 w-6 transform ${isOpen ? 'rotate-180' : ''}`} size={24}/>
            
        </button>
        <div className={`${isOpen ? 'block ' : 'hidden'}`}>
          <div className="py-6 px-6 ">
            {children}
          </div>
        </div>
      </div>
    );
  };

export default ShopFilter;