import React from 'react'
import { Input, InputGroupAddon } from 'reactstrap'
import { normalizeMoney } from '../../../utils/normalizations'
import FieldWrapper from '../../FieldWrapper'

const isInvalid = (fieldState, formState) => {
  const { invalid, isTouched } = fieldState
  const { isSubmitted } = formState

  return invalid && (isTouched || isSubmitted)
}

const buildOnChange = (parse, field) => {
  const { onChange } = field

  return e => onChange(parse(e.target.value))
}

const renderMoneyFieldInput = (props, controllerProps) => {
  const { label, parse } = props
  const { field, fieldState, formState } = controllerProps

  const { name, onBlur, onChange, ref, value } = field
  const { error, isDirty, isTouched } = fieldState

  // const onChange = buildOnChange(parse, field)
  const invalid = isInvalid(fieldState, formState)

  return (
    <>
      <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
      <Input
        type='text'
        name={name}
        value={normalizeMoney(value)}
        onChange={onChange}
        onBlur={onBlur}
        invalid={invalid}
      />
    </>
  )
}

const MoneyField = props => <FieldWrapper props={props} renderer={renderMoneyFieldInput} />

export default MoneyField
