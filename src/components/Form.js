import React from 'react'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Forms() {
    return (
        <div>
            <Form>
                <Field />
                <Field />
                <Field />
                <button>Submit</button>
            </Form>
        </div>
    )
}
const FormikLoginForm = withFormik({})(Forms)

export default FormikLoginForm