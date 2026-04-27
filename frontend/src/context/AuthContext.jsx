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
            const { data } = await api.get('/user/profile');
            // backend returns the user object
            if (data) {
                setUser(data);
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
        <AuthContext.Provider value={{api, user, setUser, loading,
            addToCart: async (productId, quantity = 1) => {
                try {
                    const { data } = await api.post('/user/cart', { productId, quantity });
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
                    const { data } = await api.delete(`/user/cart/${productId}`);
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