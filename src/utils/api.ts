import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // URL của backend

export const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true, // Để xử lý cookie JWT
});

export const fetchAccounts = async () => {
    const { data } = await api.get('/accounts');
    return data;
};

export const registerAccount = async (email: string, password: string) => {
    const { data } = await api.post('pages/register', { email, password });
    return data;
};

export const loginAccount = async (email: string, password: string) => {
    const { data } = await api.post('/login', { email, password });
    return data;
};

export const fetchProfile = async () => {
    const { data } = await api.get('/profile');
    return data;
};
