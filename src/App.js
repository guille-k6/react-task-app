import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import RegisterFormik from './components/pure/forms/registerFormik';



function App() {
  return (
    <div className=''> 
      <TaskListComponent></TaskListComponent>
      {/* <RegisterFormik></RegisterFormik> */}
    </div>

  );
}

export default App;
