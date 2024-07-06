"use client";
import { toast } from "react-hot-toast";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";

export const successToast = (text: any) =>
  toast.success(text, {
    duration: 2500,
    position: "top-right",

    // Styling
    className:
      "!bg-green-50 border-l-2 border-green-500 !text-green-500 font-light font-sm",

    // Custom Icon
    // icon: <CheckIcon className="w-5 h-5" />,
    icon: <FaCheckCircle className="w-5 h-5" />,

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const errorToast = (text: any) =>
  toast.error(text, {
    duration: 2500,
    position: "top-right",

    // Styling
    className:
      "!bg-red-50  border-l-2 border-red-500 !text-red-500 font-light font-sm",

    // Custom Icon
    icon: <GiCrossMark className="w-5 h-5" />,

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const warningToast = (text: any) =>
  toast.error(text, {
    duration: 2500,
    position: "top-right",

    // Styling

    className:
      "!bg-secondary-50  border-l-2 border-secondary-500 !text-secondary-500 font-light font-sm",

    // Custom Icon
    icon: <FaExclamationCircle className="w-5 h-5" />,

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const neutralToast = (text: any) =>
  toast.error(text, {
    duration: 2500,
    position: "top-right",

    // Styling
    className:
      "!bg-sky-50  border-l-2 border-sky-500 !text-sky-500 font-light font-sm",

    // Custom Icon
    icon: <FaExclamationCircle className="w-5 h-5" />,

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const infoToast = (text: any) =>
  toast.error(text, {
    duration: 2500,
    position: "top-right",

    // Styling
    className: "!bg-sky-50 ",

    // Custom Icon
    icon: "😉",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
