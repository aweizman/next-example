import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Input } from 'reactstrap'

import useTranslate from '../../translate/useTranslate'
import selectOptionBuilder from '../../utils/selectOptionBuilder'
import FieldDecorations from './FieldDecorations'

const buildSelectFieldInput = ({ name, label, validators, options }) => ({ field, fieldState, formState }) => {
  const { name, onBlur, onChange, ref, value } = field
  const { error, invalid, isDirty, isTouched } = fieldState

  const { t } = useTranslate()

  const isInvalid = invalid && (isTouched || formState.isSubmitted)

  return (
    <FieldDecorations label={label} error={error}>
      <Input
        type='select'
        name={name}
        invalid={isInvalid}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value=''> </option>
        {selectOptionBuilder(options, t)}
      </Input>
    </FieldDecorations>
  )
}

const SelectField = props => {
  const { name, validators } = props
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=''
      rules={{ validate: validators }}
      render={buildSelectFieldInput(props)}
    />
  )
}

export default SelectField
