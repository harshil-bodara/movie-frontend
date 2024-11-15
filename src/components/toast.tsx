import { toast } from "react-toastify";


const Toast = {
    success(message: string) {
        return toast.success(message, {
            autoClose: 2000,
        });
    },
    error(message: string) {
        return toast.error(message, {
            autoClose: 2000,
        });
    },
};

export default Toast;