import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'
import Label from './Label'
import InputText from './InputText'
import ErrorMessage from './ErrorMessage'

export const required = value => (value ? undefined : 'Required')
export const maxLength = max => value =>
  (value && value.length > max ? `Must be ${max} characters or less` : undefined)

export const maxLength15 = maxLength(15)

export const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
)


const ValidatedInput = ({
  input,
  label,
  meta: { touched, error },
}) =>
  <Wrapper>
    <Label htmlFor={input.name}>{label}</Label>
    <InputText
      {...input}
      autoComplete="off"
    />
    {touched &&
      ((error &&
        <ErrorMessage>
          {error}
        </ErrorMessage>))
    }
  </Wrapper>

ValidatedInput.propTypes = {
  input: PropTypes.shape({}).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({}).isRequired,
}

export default ValidatedInput
