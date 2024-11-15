import axiosClient from "../../utils/axiosClient";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import Toast from "../../components/toast";


const useAuth = () => {

    const router = useRouter();

    const login = async (data: { email: string, password: string; }) => {
        const response = await axiosClient.post('/auth/login', data);

        try {
            if (response.data.error) {
                throw new Error(response.data.message);
            }
            else {
                setCookie('token', response.data.data.token);
                router.push('/');
                Toast.success(response.data.message);
            }
        } catch (error) {
            Toast.error(response.data.message);
            return;
        }
    };

    return {
        login
    };
};




export default useAuth;