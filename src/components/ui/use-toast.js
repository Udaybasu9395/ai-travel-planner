const TOAST_REMOVE_DELAY = 3000;

let toasts = [];
let listeners = [];

const notify = () => {
  listeners.forEach((listener) => listener(toasts));
};

const scheduleRemove = (id, delay = TOAST_REMOVE_DELAY) => {
  setTimeout(() => {
    toasts = toasts.filter((toast) => toast.id !== id);
    notify();
  }, delay);
};

const addToast = ({ message, variant = "default", duration }) => {
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const toast = { id, message, variant };

  toasts = [...toasts, toast];
  notify();
  scheduleRemove(id, duration ?? TOAST_REMOVE_DELAY);

  return id;
};

export const toast = {
  success: (message, options = {}) =>
    addToast({ message, variant: "success", ...options }),
  error: (message, options = {}) =>
    addToast({ message, variant: "error", ...options }),
  info: (message, options = {}) =>
    addToast({ message, variant: "info", ...options }),
};

export const subscribe = (listener) => {
  listeners = [...listeners, listener];
  listener(toasts);
  return () => {
    listeners = listeners.filter((item) => item !== listener);
  };
};

export const dismiss = (id) => {
  if (!id) {
    toasts = [];
  } else {
    toasts = toasts.filter((toast) => toast.id !== id);
  }
  notify();
};
