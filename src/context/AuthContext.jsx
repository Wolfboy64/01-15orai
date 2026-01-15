import {createContext, useContext, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    const loginedUser = {
        id: 1,
        name: 'John Doe',
    }
    const login = (username) => {
        if (username === "admin") {
            setUser({name: username});
        } else {
            setUser(loginedUser);
        }
    }
    const logout = () => {
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}
export function useAuth() {
    return useContext(AuthContext);
}
    