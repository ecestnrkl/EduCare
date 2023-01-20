import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from 'react'
import Footer from '../Footer/Footer';
import Register from './Register.css';
import { Link } from 'react-router-dom'

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
                    <div className='Title'>Ich bin...</div>

                    <div className='Wrapper'>
                        <div className='Calendar'>
                            <form className="lutton">
                                <button type="submit">Lehrer</button>
                            </form>
                        </div>
                        <div className='Reports'>
                            <form className="lutton">
                                <button type="submit">Elternteil</button>
                            </form>
                        </div>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className='namen'>

                                <div className='eintrag-name'>
                                    <div className='Title'>Vorname</div>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        name="firstName"
                                        onChange={handleChange}
                                        value={data.firstName}
                                        required
                                        className='eintrag'
                                    />
                                </div>
                                <div className='eintrag-name'>
                                    <div className='Title'>Nachname</div>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        name="lastName"
                                        onChange={handleChange}
                                        value={data.lastName}
                                        required
                                        className='eintrag'
                                    /></div>
                            </div>

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
                                /></div>

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
                                /></div>

                            {error && <div className={Register.error_msg}>{error}</div>}

                            <label className="checkbox">
                                <div className='checktext'>Ich habe die AGB gelesen und akzeptiere sie.</div>
                                <input type="checkbox" defaultChecked="checked" />
                            </label>

                            <div className='Anmelden'>
                                    <Link className='linky' to="/Landingpage">
                                        <button type="submit">Registrieren</button></Link>

                                        <div className="reg">Noch kein Account? 
                                        <Link to="/Login" class="bold-textw"> Anmelden!</Link></div>
                                </div>


                        </form>
                    </div>
                </div>
            </div>
            <div className='blue'></div>

            <Footer />
        </>
    );
};

export default Signup;