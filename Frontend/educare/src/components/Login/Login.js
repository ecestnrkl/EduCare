import { useState } from "react";
import axios from "axios";
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
                                <h1>Anmelden</h1>
                                <div className='eintrag'>
                                    <div className='Title'>Email</div>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        onChange={handleChange}
                                        value={data.email}
                                        required
                                        className='eintrag'
                                    />
                                </div>
                                <div className='eintrag'>
                                    <div className='Title'>Passwort</div>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        onChange={handleChange}
                                        value={data.password}
                                        required
                                        className='eintrag'
                                    />
                                </div>
                                {error && <div className={Loginstyle.error_msg}>{error}</div>}
                                <div className='pass'>Passwort Vergessen?</div>
                                <div className='Anmelden'>
                                    <form className="save" action="/Landingpage">
                                        <button type="submit">Anmelden</button>
                                        <div className="reg">Noch kein Account? <a href="/Register" class="bold-text">Registrieren!</a></div>
                                    </form>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='blue'></div>
                </div>
                <Footer />
            </>
        </>
    );
};

export default Login;