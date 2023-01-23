import React from 'react';
import { useHistory } from 'react-router-dom';

const ProfilePage = ({user}) => {

    const history = useHistory();

    const navigateTo = (path) =>{
        history.push(path);
    }

    const goBack = () =>{
        history.goBack();
    }



    return (
        <div>
            <h1>Your profile</h1>
            <button onClick={() => navigateTo('/tasks')}>Your tasks</button>
            <button onClick={goBack}>GO back</button>
        </div>
    );
}

export default ProfilePage;
