import axios from 'axios';

const sendGet = async (url) => {
    // Check if token is present in local storage
    const token = localStorage.getItem('token');

    // If token is present, include it in the request headers
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    try {
        // Send the GET request with the provided URL and headers
        const response = await axios.get(url, { headers });

        // If the response status is unauthorized, redirect to the login page
        if (response.status === 401) {
            this.$router.push('/login');
        }
        console.log(response.data)
        // Return the data from the response
        return response.data;
    } catch (error) {
        // Handle any errors that occur during the request
        alert('Error Occurred');
        console.error('Error:', error);
        // Redirect to the login page in case of any error
        this.$router.push('/login');
    }
};

export default sendGet;