import React, { useState } from 'react';
import { registerAccount } from '@/utils/api';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await registerAccount(email, password);
            setMessage(response.message);
        } catch (error: any) {
            setMessage(error.response?.data?.error || 'Error registering');
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <h1>Register</h1>
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Register</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default Register;
