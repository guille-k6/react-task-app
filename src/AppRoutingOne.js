import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { useEffect } from 'react';

import HomePage from './pages/home/HomePage';
import NotFoundpage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/aboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import Taskspage from './pages/tasks/TaskPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';

function AppRoutingOne() {

  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first Task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second Task'
    }       
  ]

  useEffect(() => {
    logged = sessionStorage.getItem('credentials');
    console.log('user logged? ', logged);
  }, []);  

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>| HOME </Link>
          <Link to='/about'>| ABOUT </Link>
          <Link to='/faqs'>| FAQS </Link>
          <Link to='/task/1'> | Task 1 </Link>
          <Link to='/task/2'> | Task 2 </Link>

          <Link to='/any404'> | No existing route </Link>
          <Link to='/login'>| Login </Link>
        </aside>

        <main>
        <Switch>
          <Route exact path='/' component={ HomePage }/>
          <Route exact path='/online-state' component={ StatePage }></Route>
          <Route path='/login' component={LoginPage}>
          {
            logged ?
            () =>{
              alert('You are logged in. Redirecting to home.')
              return <Redirect to='/'></Redirect>
            }
            :
            () =>{
              return <LoginPage></LoginPage>
            }
          }            
          </Route>
          <Route path='/(about|faqs)' component={ AboutPage }></Route>
          <Route path='/profile' component={ ProfilePage }>
            {
              logged ?
              <ProfilePage></ProfilePage> :
              () =>{
                 alert('You must be logged in. Redirecting to login.')
                 return <Redirect to='/login'></Redirect>
                }
            }
          </Route> 
          <Route path='/tasks' component={ Taskspage }></Route>
          <Route exact path='/task/:id' render={
            ({match}) => (<TaskDetailPage task={taskList[match.params.id - 1]}></TaskDetailPage>)
          }>

          </Route>
          {/* Por ultimo se pone el link a la 404 */}
          <Route component={ NotFoundpage }/>
        </Switch>
        </main>
      </div>

    </Router>
  );
}

export default AppRoutingOne;
