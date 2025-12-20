import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-[#000000] text-[#f6f9f1] rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-[#000000]/90 hover:shadow-md active:scale-105 border border-[#dae2e2] disabled:scale-100 disabled:opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-[#f6f9f1]"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-80 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
