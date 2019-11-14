import React from 'react'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Forms({ errors, touched }) {
    return (
        <div>
            <Form>
                <Field type='text' name='name' placeholder='Name' />
                {touched.name && errors.name && (<p className="errors">{errors.name}</p>)}
                <Field type='email' name='email' placeholder='Email' />
                {touched.email && errors.email && (<p className="errors">{errors.email}</p>)}
                <Field type='password' name='password' placeholder='Password' />
                {touched.password && errors.password && (<p className="errors">{errors.password}</p>)}
                <label>  Terms of Service
                <Field type='checkbox' name='terms' />
                </label>
                <button>Submit</button>
            </Form>
        </div>
    )
}
const FormikLoginForm = withFormik({
    mapPropsToValues({ name, email, password, terms }) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            terms: terms || false
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('We need a name!'),
        email: Yup.string().required('We need your email!'),
        password: Yup.string().required('Passwords are required!')
    }),
    // handleSubmit(values, { setStatus, resetForm }) {
    //     // values is our object with all our data on it
    //     axios
    //       .post("https://reqres.in/api/users/", values)
    //       .then(res => {
    //         setStatus(res.data);
    //         console.log(res);
    //       })
    //       .catch(err => console.log(err.response));
    //     resetForm();
    //   }
    // })(AnimalForm);
})(Forms)

export default FormikLoginForm