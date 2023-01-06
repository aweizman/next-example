import React from 'react'
import { Input } from 'reactstrap'
import FieldWrapper from '../../FieldWrapper'

const isInvalid = (fieldState, formState) => {
  const { invalid, isTouched } = fieldState
  const { isSubmitted } = formState

  return invalid && (isTouched || isSubmitted)
}

const buildOnChange = (parse, field) => {
  const { onChange } = field
  if (parse) {
    return e => onChange(parse(e.target.value))
  }
  return e => onChange(e.target.value)
}

const renderTextFieldInput = (props, controllerProps) => {
  const { label, parse } = props
  const { field, fieldState, formState } = controllerProps

  const { name, onBlur, ref, value } = field
  const { error, isDirty, isTouched } = fieldState

  const onChange = buildOnChange(parse, field)
  const invalid = isInvalid(fieldState, formState)

  return (
    <Input
      type='text'
      name={name}
      data-testid={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      invalid={invalid}
    />
  )
}

const TextField = props => <FieldWrapper props={props} renderer={renderTextFieldInput} />

export default TextField
