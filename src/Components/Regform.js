import React from 'react'
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import { register } from "../index";
import "../login.css"


function Regform () {
    let dispatch = useDispatch();

    function registration(e) {
        e.preventDefault();

        dispatch(register({
            nickname: document.getElementById("nickname").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        }));
    }
        return (
            <form className="reg-form">
                <input type="text" placeholder="Nickname" id="nickname" required/>
                <input type="email" placeholder="Email" id="email" required/>
                <input type="password" placeholder="Password" id="password" required/>
                <button onClick={registration}>Register</button>
                <Link to="/" className="nav-item nav-link navbar__item">Already signed up? Log in</Link>
            </form>
        );
}

export default Regform
