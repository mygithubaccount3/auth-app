import React from 'react'
import { useStore } from "react-redux";
import { Link, useHistory } from 'react-router-dom'

function Loginform () {
    const store = useStore().getState();
    let history = useHistory();

    function logIn(e) {
        e.preventDefault();

        if (Array.isArray(store) && store.length) {
            store.forEach((el) => {
                if(el.email === document.getElementById("email").value) {
                    history.push({pathname: '/dashboard',
                        state: {
                            email: el.email,
                            password: el.password,
                            nickname: el.nickname}});
                }

            });
        }
        else document.getElementsByClassName("error")[0].innerHTML = "User not found";
    }
    return (
        <form className="login-form">
            <input type="email" placeholder="Email" id="email" required/>
            <input type="password" placeholder="Password" id="password" required/>
            <button onClick={logIn}>Log in</button>
            <p className="error"></p>
            <Link to="/sign_up" className="nav-item nav-link navbar__item">Does not have an account? Sign up</Link>
        </form>
    );
}

export default Loginform
