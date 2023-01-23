import React from 'react';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email("Invalid email format").required('Email is required'),
        password: Yup.string().required("Password is required")
    }
)

const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const history = useHistory();

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                // Initial values that the form will take
                initialValues={ initialCredentials }

                // Yup validation schema
                validationSchema={loginSchema}       

                // On submit function
                onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
                // We save the data in the sessionStorage
                await sessionStorage.setItem('credentials', values);
                history.push('/profile');
                

                }}

            >
                {/* We obtain props from Formik */}
                {({ errors, touched, isSubmitting, values, handleChange, hangleBlur}) => (
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field id="email" type="email" name="email" placeholder="example@email.com" />
                    {
                        errors.email && touched.email &&
                        (
                            <div className='error'>
                                <p>{errors.email}</p>
                            </div>
                        )
                    }

                    <label htmlFor="password">Password</label>
                    <Field id="password" type="password" name="password" placeholder="password" />
                    {
                        errors.password && touched.password &&
                        (
                            <ErrorMessage name="password"></ErrorMessage>
                        )
                    }
                    <button type="submit">Submit</button>
                </Form>
                )}
            </Formik>
        </div>
    );
}

export default LoginFormik;
