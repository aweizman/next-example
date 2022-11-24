import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { FormGroup, InputGroup, Label } from 'reactstrap'
import useTranslate from '../../translation/useTranslate'

const buildRules = validators => {
  if (!validators) return {}
  return { validate: validators }
}

const InputLabel = ({ label }) => {
  return (
    <Label>{label}</Label>
  )
}

const ErrorMessage = ({ fieldState, formState }) => {
  const { t } = useTranslate()

  const { error, isTouched } = fieldState
  const { isSubmitted } = formState

  if (!error || (isTouched && !isSubmitted)) return

  const { message } = error

  return <div className='invalid-field-message'>{t(message)}</div>
}

const renderFieldWrapper = (props, renderer) => ({ field, fieldState, formState }) => {
  const controllerProps = { field, fieldState, formState }

  return (
    <FormGroup>
      <InputLabel {...props} />
      <InputGroup>
        {renderer(props, controllerProps)}
      </InputGroup>
      <ErrorMessage fieldState={fieldState} formState={formState} />
    </FormGroup>
  )
}

const FieldWrapper = ({ props, renderer }) => {
  const { name, validators } = props

  const { control } = useFormContext()
  const rules = buildRules(validators)

  return (
    <Controller
      control={control}
      name={name}
      render={renderFieldWrapper(props, renderer)}
      rules={rules}
      defaultValue=''
    />
  )
}

export default FieldWrapper
