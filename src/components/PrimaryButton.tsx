"use client";
import { infoToast } from "./Toaster";

const PrimaryButton = ({ label }: { label: string }) => {
  return (
    <button
      className="px-6 py-3 bg-slate-800 text-white rounded-3xl font-semibold cursor-pointer hover:bg-slate-900 transition-colors duration-200 ease-in-out"
      onClick={() => infoToast("Work In Progress")}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
