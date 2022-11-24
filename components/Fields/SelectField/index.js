import React from 'react'
import { Input } from 'reactstrap'

import useTranslate from '../../../translation/useTranslate'
import selectOptionBuilder from '../../../utils/selectOptionBuilder'
import FieldWrapper from '../../FieldWrapper'

const isInvalid = (fieldState, formState) => {
  const { invalid, isTouched } = fieldState
  const { isSubmitted } = formState

  return invalid && (isTouched || isSubmitted)
}

const renderSelectFieldInput = (props, controllerProps) => {
  const { t } = useTranslate()

  const { label, parse, options } = props
  const { field, fieldState, formState } = controllerProps

  const { name, onBlur, onChange, ref, value } = field
  const { error, isDirty, isTouched } = fieldState

  const invalid = isInvalid(fieldState, formState)

  return (
    <Input type='select' name={name} value={value} onChange={onChange} onBlur={onBlur} invalid={invalid}>
      <option value=''> </option>
      {selectOptionBuilder(options, t)}
    </Input>
  )
}

const SelectField = props => <FieldWrapper props={props} renderer={renderSelectFieldInput} />

export default SelectField
