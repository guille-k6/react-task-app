import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import {useHistory} from 'react-router-dom';

import {Home, Settings, Task } from '@mui/icons-material';

const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return (<Home></Home>)
        case 'TASKS':
            return (<Task></Task>)
        case 'SETTINGS':
            return (<Settings></Settings>)   
        default:
            break;
    }
}

const MenuListItems = ({list}) => {

    const history = useHistory();

    const navigateTo = (path) =>{
        history.push(path);
    }

    return (
        <List>
            {list.map(({text, path, icon}, index) =>
            (
                <ListItem key={index} button onClick={() => navigateTo(path)}>

                    <ListItemIcon>
                        {getIcon(icon)}
                    </ListItemIcon>
                    <ListItemText primary={text}></ListItemText>

                </ListItem>
            )
            )}
        </List>
    )
}

export default MenuListItems;