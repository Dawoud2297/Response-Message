import { toast } from "react-toastify";
export const defaultOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
}
export const showMessage = (type, message, options = {}) => {
    let toastEmitter;

    switch (type) {
        case "success":
            toastEmitter = toast.success;
            break;
        case "error":
            toastEmitter = toast.error;
            break;
        case "info":
            toastEmitter = toast.info;
            break;
        case "warning":
            toastEmitter = toast.warn;
            break;
        default:
            toastEmitter = toast;
            break;
    }
   
    toastEmitter(message, {
        ...defaultOptions,
        ...options
    })
}