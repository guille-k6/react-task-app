import React from 'react';
import LoginFormik from './../../components/pure/forms/loginFormik'
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {

    const history = useHistory();

    const register = () =>{
        history.push('/register');
    }

    return (
        <div>
            <LoginFormik></LoginFormik>

            <Button variant="contained" onClick={register}>Go to Register</Button> 

        </div>
    );
}

export default LoginPage;
