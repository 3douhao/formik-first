import React from 'react'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input type='text' {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  )
}

const App = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        firstName: '',
        lastName: ''
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, 'too many characters, should be less 20')
          .required('hahhaha, got you'),
        lastName: Yup.string()
          .max(20, 'tooo many chars, 20 or less')
          .required('blank is not allowed'),
        email: Yup.string()
          .email()
          .required('must be filled here')
      })}
    >
      <Form>
        <InputField label='firstName' placeholder='jane' name='firstName' />
        <InputField label='lastName' name='lastName' placeholder='doe' />
        <InputField
          label='email'
          name='email'
          placeholder='example@example.com'
        />
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}

export default App
