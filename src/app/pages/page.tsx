'use client';
import React, { useEffect, useState } from 'react';
import { fetchAccounts } from '@/utils/api';

const Page = () => {
    const [accounts, setAccounts] = useState<any[]>([]);

    useEffect(() => {
        const loadAccounts = async () => {
            const data = await fetchAccounts();
            setAccounts(data);
        };

        loadAccounts();
    }, []);

    return (
        <div>
            <h1>Accounts</h1>
            <ul>
                {accounts.map((account) => (
                    <li key={account.id}>{account.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default Page;
