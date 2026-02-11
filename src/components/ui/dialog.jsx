import React from 'react';

export function Dialog({ open, onOpenChange, children }) {
  if (!open) {
    return null;
  }

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget && onOpenChange) {
      onOpenChange(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleBackdropClick}
      role="presentation"
    >
      {children}
    </div>
  );
}

export function DialogContent({ children }) {
  return (
    <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
      {children}
    </div>
  );
}

export function DialogHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function DialogDescription({ children }) {
  return <div className="text-sm text-gray-600">{children}</div>;
}
