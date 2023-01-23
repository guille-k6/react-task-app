import {ROLES} from './roles.enum';
export class User{
    username = '';
    email = '';
    password = '';
    role = ROLES.user;


    constructor(username, email, password, role){
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}