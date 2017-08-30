import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'


import Button from 'components/styled/Button'

import ValidatedInput, {
  required,
  maxLength15,
  email,
} from './ValidatedInput'

import Wrapper from './Wrapper'
import FormFieldsWrapper from './FormFieldsWrapper'
import FormControlsWrapper from './FormControlsWrapper'


const EditorForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FormFieldsWrapper>
          <Field
            name="firstName"
            label="First Name"
            component={ValidatedInput}
            type="text"
            validate={[required, maxLength15]}
          />
          <Field
            name="lastName"
            label="Last Name"
            component={ValidatedInput}
            type="text"
            validate={[required, maxLength15]}
          />
          <Field
            name="email"
            label="Email"
            component={ValidatedInput}
            type="text"
            validate={[required, email]}
          />
        </FormFieldsWrapper>
        <FormControlsWrapper>
          <Button type="submit" disabled={pristine || submitting}>
            Submit
          </Button>
          <Button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </Button>
        </FormControlsWrapper>
      </form>
    </Wrapper>
  )
}

EditorForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

export default reduxForm({
  form: 'simple', // a unique identifier for this form
  enableReinitialize: true,
})(EditorForm)
