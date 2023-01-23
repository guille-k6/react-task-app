import React, {useState, useEffect} from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';
import AddTaskForm from '../pure/forms/addTaskForm';


const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Description1', false, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description2', true, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING);

    
    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);   

    //Control del ciclo de vida del componenete
    useEffect(() => {
       // console.log('Task State has been modified.');
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => {
       //     console.log('Task list component is going to unmount.')
        };
    }, [tasks]);

    function completeTask(task){
        console.log('Complete this task:' , task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        // Here we update the state of the component with the new list of tasks and it will update the 
        // iteration of the tasks in order to show the task updated.
        setTasks(tempTasks);
    }

    function deleteTask(task){
        console.log('Delete this task:' , task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);           
    }

    function addTask(task){
        console.log('Add this task:' , task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);           
    }

    const Table = () =>{
        return(
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => {
                        return (
                            <TaskComponent
                                key={index}
                                task={task}
                                complete={completeTask}
                                remove={deleteTask}
                            >
                            </TaskComponent>
                        )
                    })}

                </tbody>
            </table>
        )
    }

    let tasksTable;

    if(tasks.length > 0){
        tasksTable = <Table></Table>
    }else{
        tasksTable = (
        <div>
            <h3>There are no tasks to show</h3>
            <h4>Please, create one</h4>
        </div>
        )
    }

    const loadingStyle={
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* card header */}
                    <div className='card-header p-3 text-center'>
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                    {/* card body */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        {/* TODO: Add loading spinner */}
                        {loading ? (<p style={loadingStyle}>Loading tasks...</p>) : tasksTable}
                    </div>
                </div>
            </div>
            {/* <TaskForm add={addTask} lenght={tasks.length}></TaskForm> */}
            <AddTaskForm add={addTask} lenght={tasks.length}></AddTaskForm>
        </div>
    );
};



export default TaskListComponent;
