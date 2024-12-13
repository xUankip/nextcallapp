import React, { useEffect, useState } from 'react';
import { fetchProfile } from '@/utils/api';

const Profile = () => {
    const [profile, setProfile] = useState<any>(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const loadProfile = async () => {
            try {
                const data = await fetchProfile();
                setProfile(data);
            } catch (error: any) {
                setMessage(error.response?.data || 'Error loading profile');
            }
        };

        loadProfile();
    }, []);

    return (
        <div>
            <h1>Profile</h1>
            {message && <p>{message}</p>}
            {profile && (
                <div>
                    <p>Email: {profile.email}</p>
                </div>
            )}
        </div>
    );
};

export default Profile;
