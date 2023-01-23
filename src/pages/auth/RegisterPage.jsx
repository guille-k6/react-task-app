import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';



const RegisterPage = () => {

    const history = useHistory();

    const login = () =>{
        history.push('/login');
    }

    return (
        <div>
            <h1>Register Page</h1>

            <Button variant="contained" onClick={login}>Go to login</Button> 
        </div>
    );
}

export default RegisterPage;
