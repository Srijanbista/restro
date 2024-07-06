"use client";
import { ReactNode } from "react";
import { infoToast } from "./Toaster";

interface HighlightCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}
const HighlightCard = ({ title, description, icon }: HighlightCardProps) => {
  return (
    <div className="p-8 text-center border-2 border-slate-200 flex flex-col gap-y-6 rounded-lg max-w-sm hover:scale-105 transition-transform duration-300 ease-in-out delay-100">
      <span className="p-8 self-center bg-slate-100 rounded-full">{icon}</span>
      <span className="text-xl font-medium line-clamp-1">{title}</span>
      <p className="line-clamp-4">{description}</p>
      <button
        className="text-red-800 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bg-red-800 after:left-0 after:bottom-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
        onClick={() => infoToast("Work In Progress")}
      >
        Explore Menu
      </button>
    </div>
  );
};

export default HighlightCard;
