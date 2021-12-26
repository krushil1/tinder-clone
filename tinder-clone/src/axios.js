import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-clonebackend1.herokuapp.com'
})

export default instance;