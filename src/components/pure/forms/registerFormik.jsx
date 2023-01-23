import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//Models
import {ROLES} from '../../../models/roles.enum'
// import {User} from '../../../models/user.class'

  const RegisterFormik = () => {

    // const submit = (values) =>{
    //     alert('Register user')
    // }

    const initialValues = {
        username : '',
        email : '',
        password : '',
        confirm: '', // to confirm password
        role : ROLES.USER
    }

    const registerSchema = Yup.object().shape({
        username: Yup.string()
                     .min(6, 'Username too short')
                     .max(12, 'Username too long')
                     .required('Username is required'),
        email: Yup.string()
                     .email("Invalid email format")
                     .required('Email is required'),
        role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
                     .required('Role is required'),
        password: Yup.string()
                     .required("Password is required"),
        confirm: Yup.string()
                     .when('password', {
                        is: value => (value && value.length > 0 ? true : false),
                        then: Yup.string().oneOf(
                            [Yup.ref('password')],
                            'Passwords must match'
                        )
                     }).required('You must confirm your password')

    });

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}

                // Yup validation schema
                validationSchema={registerSchema}     

                // On submit function
                onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
                }}
            >

                {({ errors, touched, isSubmitting, values, handleChange, hangleBlur}) => (
                <Form>
                    <label htmlFor="username">Username</label>
                    <Field id="username" type="text" name="username" placeholder="Your Username"/>    
                    {
                        errors.username && touched.username &&
                        (
                            <ErrorMessage name='username' component='div'></ErrorMessage>
                        )
                    }

                    <label htmlFor="email">Email</label>
                    <Field id="email" type="email" name="email" placeholder="example@example.com"/>  
                    {
                        errors.email && touched.email &&
                        (
                            <ErrorMessage name="email" component='div'></ErrorMessage>
                        )
                    }
                    <label htmlFor="password">Password</label>
                    <Field id="password" type="password" name="password" placeholder="password" />
                    {
                        errors.password && touched.password &&
                        (
                            <ErrorMessage name="password" component='div'></ErrorMessage>
                        )
                    }

                    <label htmlFor="confirm">Password</label>
                    <Field id="confirm" type="password" name="confirm" placeholder="Confirm password" />
                    {
                        errors.confirm && touched.confirm &&
                        (
                            <ErrorMessage name="confirm" component='div'></ErrorMessage>
                        )
                    }                    

                    <button type="submit">Register account</button>  
                    {isSubmitting ? (<p>Sending your credentials...</p>) : null}             
                </Form>
            )}
            </Formik>
        </div>
    );
}

export default RegisterFormik;
