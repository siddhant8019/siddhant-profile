import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group btn-primary btn-advanced flex items-center justify-center gap-2 h-[3rem] w-[8rem] rounded-[4px] outline-none transition-[transform,box-shadow] duration-500 ease-fluid focus:ring-2 focus:ring-[#1a1a1a]/20 focus:ring-offset-2 disabled:scale-100 disabled:opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-[#FFFFFF]"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-80 transition-transform duration-500 ease-fluid group-hover:translate-x-0.5" />
        </>
      )}
    </button>
  );
}
