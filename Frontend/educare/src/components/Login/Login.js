import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import React from 'react'
import image from '../image/sit.png';
import Footer from '../Footer/Footer';
import Loginstyle from './Loginstyle.css';

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:3001/api/auth";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <>
            <>
                <div className='login'>
                    <img
                        src={image}
                        className="login-pic"
                        alt="Login" />
                    <div className='loginBox'>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <h1>Login to Your Account</h1>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    onChange={handleChange}
                                    value={data.email}
                                    required
                                    className='eintrag'
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={handleChange}
                                    value={data.password}
                                    required
                                    className='eintrag'
                                />
                                {error && <div className={Loginstyle.error_msg}>{error}</div>}
                                <button type="submit" className="save">
                                    Sing In
                                </button>
                            </form>
                        </div>
                        <div>
                            <h1>New Here ?</h1>
                            <Link to="/signup">
                                <button type="button" className="save">
                                    Sing Up
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        </>
    );
};

export default Login;