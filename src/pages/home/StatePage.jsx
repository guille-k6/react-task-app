import React from 'react';
import { useLocation } from 'react-router-dom';

const StatePage = () => {

    const location = useLocation();

    console.log(location.state.online); // State sent 
    console.log(location.search); // Query Params sent

    return (
        <div>
            <h1>State: {location.state.online.toString()}</h1>
        </div>
    );
}

export default StatePage;
