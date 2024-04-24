import React from "react";

const SignInput = React.forwardRef(function SignInput(
  { type, id, label },
  ref
) {
  return (
    <div className="relative">
      <input
        className="
            block
            rounded-sm 
            px-6
            py-5
            mb-5
            pb-2
            text-white
            bg-neutral-900
            bg-opacity-60
            text-md
            w-full
            border
            border-zinc-500
            focus:outline-2
            focus:outline-zinc-100
            focus:ring-0
            peer
            autofill:bg-transparent            
            "
        type={type}
        placeholder=""
        id={id}
        ref={ref}
      />
      <label
        htmlFor={id}
        className="
            absolute
            text-zinc-300
            duration-200
            transform 
            -translate-y-4 
            text-md
            top-4
            z-10
            scale-75
            origin-[0]
            left-6
            peer-focus:
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-4
            cursor-text
            "
      >
        {label}
      </label>
    </div>
  );
});

SignInput.displayName = "SignInput";

export default SignInput;
