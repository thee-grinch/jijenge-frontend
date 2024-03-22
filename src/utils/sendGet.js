import { useRouter } from 'vue-router';
import axios from 'axios';

const sendGet = async (url) => {
    const router = useRouter();
    console.log(router)
    const token = localStorage.getItem('token');
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    try {
        const response = await axios.get(url, { headers });
        if (response.status === 401) {
            router.push('/login');
        }
        console.log("resposnse", response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        router.push('/login');
    }
};

export default sendGet;
