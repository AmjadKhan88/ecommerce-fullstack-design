import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import { icons } from "../../assets/assets";
import { toast } from "react-toastify";
import {useAuth} from "../../context/AuthContext"
import Span from '../../components/ui/Spiner'

export default function Login() {
    const {type} = useParams();
    const navigate = useNavigate();
    const [state, setState] = useState(type === "login" ? 'Login':'Sign Up');
    const [loading, setLoading] = useState(false);
    const { api , setUser } = useAuth();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const path = state === "Login" ? '/api/user/login' : '/api/user/register'
            const {data} = await api.post(path,formData);
            if(data.success){
                localStorage.setItem("token",data.token);
                setUser(data.user);
                navigate("/");
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        } finally {
            setLoading(false)
        }
       

    }

    return (

        <div className="min-h-screen flex">

            {/* LEFT SIDE */}
            <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 items-center justify-center relative overflow-hidden">

                {/* overlay blur */}
                <div className="absolute w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl top-[-200px] left-[-200px]"></div>

                <div className="absolute w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl bottom-[-200px] right-[-200px]"></div>

                <div className="relative text-white max-w-lg">

                    <h1 className="text-5xl font-bold mb-6">
                        Shop Smarter <br /> Live Better
                    </h1>

                    <p className="text-lg text-gray-200 mb-10">
                        Discover millions of products with best prices and fast delivery.
                    </p>

                    {/* PRODUCT MOCK */}
                    <div className="grid grid-cols-3 gap-5">

                        <img
                            className="rounded-xl shadow-xl hover:scale-105 transition"
                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                        />

                        <img
                            className="rounded-xl shadow-xl hover:scale-105 transition mt-10"
                            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
                        />

                        <img
                            className="rounded-xl shadow-xl hover:scale-105 transition"
                            src={assets.iphone_13}
                        />

                    </div>

                </div>

            </div>


            {/* RIGHT SIDE */}

            <div className="flex w-full lg:w-1/2 items-center justify-center bg-white">

                <div className="bg-white p-10 rounded-2xl  w-[420px]">

                    <h2 className="text-3xl font-bold mb-2">

                        {state}

                    </h2>

                    <p className="text-gray-500 mb-8">

                        {state === "Login"
                            ?
                            "Login to continue shopping"
                            :
                            "Create account to start shopping"
                        }

                    </p>

                    <form onSubmit={submitHandler} className="space-y-5">

                        {
                            state === "Sign Up"
                            &&

                            <input
                                name="name"
                                onChange={handleChange}
                                value={formData.name}
                                className="w-full  border-b border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                type="text"
                                placeholder="Full Name"
                                required
                            />

                        }

                        <input
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                            className="w-full border-b border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="email"
                            placeholder="Email"
                            required
                        />


                        <input
                            name="password"
                            onChange={handleChange}
                            value={formData.password}
                            className="w-full border-b border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="password"
                            placeholder="Password"
                            required
                        />


                        <button disabled={loading} className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition">

                            {loading ? <Span/> : state}

                        </button>

                    </form>


                    {/* SWITCH */}

                    <div className="text-center mt-6">

                        {
                            state === "Login"
                                ?

                                <p>
                                    Don't have account?

                                    <button
                                        disabled={loading}
                                        onClick={() => setState("Sign Up")}
                                        className="ml-2 text-blue-600 font-semibold"
                                    >

                                        Sign Up

                                    </button>

                                </p>

                                :

                                <p>

                                    Already have account?

                                    <button
                                        disabled={loading}
                                        onClick={() => setState("Login")}
                                        className="ml-2 text-blue-600 font-semibold"
                                    >

                                        Login

                                    </button>

                                </p>

                        }

                    </div>


                    {/* divider */}

                    <div className="flex items-center my-6">

                        <div className="flex-1 border"></div>

                        <p className="mx-3 text-gray-400">
                            OR
                        </p>

                        <div className="flex-1 border"></div>

                    </div>


                    {/* SOCIAL */}

                    <div className="space-y-3">

                        <button disabled={loading} className="w-full flex items-center justify-center gap-2 border border-gray-300 p-3 rounded-lg hover:bg-gray-100 transition">

                           <img src={icons.google} className="w-6"/> Continue with Google

                        </button>

                    </div>


                </div>

            </div>


        </div>

    )

}
