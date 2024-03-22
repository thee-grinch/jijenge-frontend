import axios from "axios";

async function sendPost(url, data) {
    try {
        const token = localStorage.getItem('token');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const response = await axios.post(url, data, {headers});

        if (response.status >= 200 && response.status < 300) {
            // The request was successful.
            return {
                success: true,
                data: response.data // Corrected here
            };
        } else {
            // The request failed.
            return {
                success: false,
                statusCode: response.status, // return the status code
                message: response.statusText // return the status text
            };
        }
    } catch (error) {
        return {
            success: false,
            statusCode: error.response.status, // return the status code
            message: error.response.data.message // return the error message
        };
    }
}

export default sendPost;