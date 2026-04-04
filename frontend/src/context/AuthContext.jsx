/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState,useEffect } from "react";
import { toast } from "react-toastify";
import api from "../configs/api";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const getUser = async () => {
        try {
            const {data} = await api.get('/auth/profile');
            if(data.success){
                setUser(data.user);
            }
        } catch (error) {
          toast.error(error?.response?.data?.message || error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        // getUser();
    }, []);

    return (
        <AuthContext.Provider value={{api, user, setUser, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);