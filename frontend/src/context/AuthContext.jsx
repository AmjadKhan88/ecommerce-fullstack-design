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
            const { data } = await api.get('/api/user/profile');
            if (data) {
                setUser(data);
            }
        } catch (error) {
          // ignore 401 until login
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) getUser();
        else setLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{api, user, setUser, loading, loadUser: getUser,
            addToCart: async (productId, quantity = 1) => {
                try {
                    const { data } = await api.post('/api/user/cart', { productId, quantity });
                    if (data?.success) {
                        setUser(data.user);
                        toast.success('Added to cart');
                    }
                } catch (error) {
                    toast.error(error?.response?.data?.message || error.message);
                }
            },
            removeFromCart: async (productId) => {
                try {
                    const { data } = await api.delete(`/api/user/cart/${productId}`);
                    if (data?.success) {
                        setUser(data.user);
                        toast.success('Removed from cart');
                    }
                } catch (error) {
                    toast.error(error?.response?.data?.message || error.message);
                }
            }
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);