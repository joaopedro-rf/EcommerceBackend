import React, { useCallback } from "react";
import { useLogoutMutation } from "../hooks/useSignOutMutation";
import { Navigate } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";

const MenuAccount = ({ visible }) => {
  if (!visible) return null;
  return (
    <div
      className={`flex flex-col bg-black w-56 absolute top-8 right-0 py-5 border border-zinc-800`}
    >
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center">
          <div className="ml-2">
            <FaRegCircleUser size={32} />
          </div>
          <a href="/Auth" className="text-white group-hover/item:underline">
            Profile
          </a>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div className="px-3 text-center text-white text-sm hover:underline "></div>
      </div>
    </div>
  );
};

export default MenuAccount;
