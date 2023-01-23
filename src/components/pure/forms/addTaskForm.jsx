import React, {useRef} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// Models
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';


const AddTaskForm = ({add, lenght}) => {

    const levelRef = useRef(LEVELS.NORMAL);

    const initialValues = {
        name: '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL // level by default
    }

    const taskSchema = Yup.object().shape({
        name: Yup.string()
                     .required('Task name is required'),
        description: Yup.string()
                     .required('Task description is required'),
        level: Yup.string().oneOf([LEVELS.NORMAL, LEVELS.BLOCKING, LEVELS.URGENT], 'You must select a Role: User / Admin')
                     .required('Role is required')
    });

    function addTask(values){
        console.log('function addTask');
        const newTask = new Task(
            values.name,
            values.description,
            false, 
            levelRef.current.value
        );
        console.log(newTask);
        add(newTask);
    }

    const normalStyle = {
        color: 'blue',
        fontWeight: 'bold'
    }

    const urgentStyle = {
        color: 'yellow',
        fontWeight: 'bold'
    }

    const blockingStyle = {
        color: 'tomato',
        fontWeight: 'bold'
    }    

    return (
        <div>
            <Formik
                initialValues={initialValues}
                // Validation schemas
                validationSchema={taskSchema}
                onSubmit={(values, actions) => {
                setTimeout(() => {
                addTask(values);
                actions.setSubmitting(false);
                }, 0);
                }}         
            >
                {({ errors, touched, isSubmitting, values, handleChange, hangleBlur}) => (
                <Form>
                    <label htmlFor="name">Task name</label>
                    <Field id="name" type="text" name="name" placeholder="Task name"/>    
                    {
                        errors.name && touched.name &&
                        (
                            <ErrorMessage name='name' component='div'></ErrorMessage>
                        )
                    }

                    <label htmlFor="description">Task description</label>
                    <Field id="descripition" type="text" name="description" placeholder="Task description"/>  
                    {
                        errors.description && touched.description &&
                        (
                            <ErrorMessage name="description" component='div'></ErrorMessage>
                        )
                    }
                    <label htmlFor="level">Task level</label>
                    <select ref={levelRef} className='form-control form-control-lg' defaultValue={LEVELS.NORMAL} id='selectLevel'>
                        <option style={normalStyle} value={LEVELS.NORMAL}>Normal</option>
                        <option style={urgentStyle} value={LEVELS.URGENT}>Urgente</option>
                        <option style={blockingStyle} value={LEVELS.BLOCKING}>Blocking</option>
                    </select>

                    <button type="submit">Add Task</button>             
                </Form>
            )}
            </Formik>
            
        </div>
    );
}

export default AddTaskForm;
