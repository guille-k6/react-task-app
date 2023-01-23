import React from 'react';
import {useLocation, useHistory} from 'react-router';

const HomePage = () => {

    const location = useLocation();
    const history = useHistory();
    console.log(location.pathname);

    const navigate = (path) =>{
        history.push(path);
    }  
    
    const navigateProps = (path) =>{
        history.push({
            pathname: path,
            search: '?online=true', // query Params
            state: {
                online: true,

            }
        });
    }

    return (
        <div>
            <h1>Home page</h1>
            <button onClick={() => navigateProps('/online-state')}>
                Go to page with State / Query Params
            </button>
            <button onClick={() => navigate('/profile')}>
                Go to profile
            </button>
        </div>

    );
}

export default HomePage;
