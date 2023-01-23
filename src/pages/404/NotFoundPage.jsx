import React from 'react';
import { useHistory } from 'react-router-dom'

const NotFoundPage = () => {
    const history = useHistory();
    
    const navigateTo = (path) =>{
        history.push(path);
    }

    return (
        <div>
            <h1>404 - Page not found.</h1>
            <button onClick={() => navigateTo('/')}>
                Go back to home
            </button>
        </div>
    );
}

export default NotFoundPage;
