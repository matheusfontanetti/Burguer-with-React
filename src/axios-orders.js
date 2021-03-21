import axios from 'axios';

const instance = axios.create({
    baseUrl: 'https://burguer-d4509-default-rtdb.firebaseio.com/'
});

export default instance;