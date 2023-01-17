import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React from 'react'
import Footer from '../Footer/Footer';
import Register from './Register.css';

const Signup = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:3001/api/users";
            const { data: res } = await axios.post(url, data);
            navigate("/login");
            console.log(res.message);
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
            <div className='Register'>
                <div className='RegisterBox'>
                    <h1>Registrieren</h1>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <h3>Erstelle einen Account</h3>
                            <input
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                onChange={handleChange}
                                value={data.firstName}
                                required
                                className='eintrag'
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                onChange={handleChange}
                                value={data.lastName}
                                required
                                className='eintrag'
                            />
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
                            {error && <div className={Register.error_msg}>{error}</div>}
                            <button type="submit" className="save" action="/LandingPage">
                                Sing Up
                            </button>
                            <Link to="/login">
                        <form className="save">
                            <button type="button" action="/LandingPage"> Login </button>
                        </form>
                    </Link>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Signup;