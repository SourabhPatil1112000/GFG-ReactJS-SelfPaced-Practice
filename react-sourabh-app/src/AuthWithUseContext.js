import React, { createContext, useContext, useState } from 'react';
const AuthContext = createContext();
function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}
function LoginButton() {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    return (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? 'Logout' : 'Login'}
        </button>
    );
}
function AuthWithUseContext() {
    return (
        <AuthProvider>
            <LoginButton />
        </AuthProvider>
    );
}
export default AuthWithUseContext;