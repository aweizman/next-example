import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Input } from 'reactstrap'
import FieldDecorations from './FieldDecorations'

const buildTextFieldInput = ({ name, label, validators }) => ({ field, fieldState, formState }) => {
  const { name, onBlur, onChange, ref, value } = field
  const { error, invalid, isDirty, isTouched } = fieldState

  const isInvalid = invalid && (isTouched || formState.isSubmitted)

  return (
    <FieldDecorations label={label} error={error}>
      <Input
        type='text'
        name={name}
        invalid={isInvalid}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </FieldDecorations>
  )
}

const TextField = props => {
  const { name, validators } = props
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=''
      rules={{ validate: validators }}
      render={buildTextFieldInput(props)}
    />
  )
}

export default TextField
