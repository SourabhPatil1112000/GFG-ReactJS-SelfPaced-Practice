import React from 'react';
import { useAuth } from '../../context/auth-context'; // Fixed path

export const Login = () => {
    const { isLoggedIn, setIsLoggedIn } = useAuth();

    const handleAuthAction = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>This is Login Page</h1>
            {!isLoggedIn && (
                <div style={{ margin: '10px 0' }}>
                    <label> Mobile No.: </label>
                    <input placeholder="enter mobile number" maxLength={10} />
                </div>
            )}
            <button onClick={handleAuthAction}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
    );
};