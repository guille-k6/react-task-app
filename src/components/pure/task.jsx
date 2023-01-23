import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
// Modelos
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

// Estilos
import '../../styles/task.scss';


const TaskComponent = ({task, complete, remove}) => {

    useEffect(() => {
        //console.log('Created task');
        return () => {
        //    console.log(`Task: ${task.name} is going to unmount.`)
        };
    }, [task]);

    // function that returns icon depending on completion of the taask.
    function taskCompletedIcon(){
        if(task.completed){
            return (<i onClick={ () => complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        }else{
            return (<i onClick={ () => complete(task)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }
    }

    // This function returns a Badge depending on the task level.
    function taskLevelBadge(){
        switch(task.level){
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                );
            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>
                );
            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>
                );
            default: break;
        }
    }

    const taskCompleted = {
        color: 'gray',
        textDecoration: 'line-through',
        fontWeight: 'bold'
    }

    const taskPending = {
        fontWeight: 'bold',
        color: 'tomato'
    }

    return (
        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>               
            </td>
            <td className='align-middle'>
                {/* execution of function to return badge element */}
                {taskLevelBadge()}               
            </td>
            <td className='align-middle'>
                {/* execution of function to return icon depending on completion */}
                {taskCompletedIcon()}
                <i onClick={() => remove(task)} className='bi-trash task-action' style={{color: 'tomato'}}></i>
            </td>

        </tr>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;