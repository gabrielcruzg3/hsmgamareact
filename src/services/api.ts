import axios from 'axios';

export const api = axios.create({
    // baseURL: 'https://gamabackend-with-node.herokuapp.com/'
    // baseURL: 'https://dev-marcilio-afya.herokuapp.com/'
    baseURL: 'https://sistemadeagendamento-san5v.ondigitalocean.app/',  
})