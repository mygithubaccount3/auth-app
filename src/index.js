import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux"

export const register = (payload) => {
    return {
        type: "REGISTER",
        data: payload
    }
};

const users = (state = [], action) => {
    switch (action.type) {
        case "REGISTER":
            return [...state, action.data];
        default:
            return state
    }
};

const store = createStore(users);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));
