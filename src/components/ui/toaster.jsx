import { useEffect, useState } from "react";

import { dismiss, subscribe } from "@/components/ui/use-toast";

const variantStyles = {
  default: "border-gray-200 bg-white text-gray-900",
  success: "border-emerald-200 bg-emerald-50 text-emerald-900",
  error: "border-red-200 bg-red-50 text-red-900",
  info: "border-blue-200 bg-blue-50 text-blue-900",
};

function Toaster() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => subscribe(setToasts), []);

  return (
    <div className="fixed right-4 top-4 z-50 flex w-full max-w-sm flex-col gap-3">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-start justify-between gap-3 rounded-lg border px-4 py-3 text-sm shadow ${
            variantStyles[toast.variant] || variantStyles.default
          }`}
        >
          <span className="flex-1">{toast.message}</span>
          <button
            type="button"
            className="text-xs font-semibold"
            onClick={() => dismiss(toast.id)}
          >
            Close
          </button>
        </div>
      ))}
    </div>
  );
}

export default Toaster;
