import React, { useState } from 'react';
import { loginAccount } from '@/utils/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await loginAccount(email, password);
            setMessage(response.message);
        } catch (error: any) {
            setMessage(error.response?.data?.error || 'Error logging in');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default Login;
