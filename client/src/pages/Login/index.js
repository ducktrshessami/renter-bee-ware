import React from 'react';
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import LoginForm from '../../components/LoginForm';

function Login() {
    const history = useHistory();
    API.isAuthenticated()
        .then(res => {
            if (res) {
                history.push("/");
            }
        })
        .catch(console.error);
    return (
        <div>
            <LoginForm />
        </div>
    );
}

export default Login;