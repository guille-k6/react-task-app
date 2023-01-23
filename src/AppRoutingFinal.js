import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { useEffect } from 'react';

import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage  from './pages/auth/LoginPage';
import Dashboardpage from './pages/dashboard/DashBoard';
import RegisterPage from './pages/auth/RegisterPage';
import TaskListComponent from './components/container/task_list';


function AppRoutingOne() {

  let loggedIn = true;

  return (
    <Router>
      <Switch>
        {/* Redirections to protect our route */}
        <Route exact path='/'>
          {
            loggedIn ? 
            <Redirect from='/' to='/dashboard'></Redirect> 
            :
            <Redirect from='/' to='/login'></Redirect>
          }
        </Route>
        {/* Login Route */}
        <Route exact path='/login' component={ LoginPage }></Route>
        {/* DashBoard route */}
        <Route exact path='/dashboard'>
          {
            loggedIn ? 
            (<Dashboardpage></Dashboardpage>)
            :
            <Redirect from='/' to='/login'></Redirect>
          }
        </Route>

        {/* Register route */}
        <Route exact path='/register' component={ RegisterPage }></Route>

        {/* Tasks */}
        <Route exact path='/tasks'>
          {
            loggedIn ? 
            <TaskListComponent></TaskListComponent> 
            :
            <Redirect from='/' to='/login'></Redirect> 
          }
        </Route>


        <Route component={NotFoundPage}></Route>
      </Switch>
    </Router>
  );
}

export default AppRoutingOne;
