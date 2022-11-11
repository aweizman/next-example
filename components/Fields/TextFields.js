import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Input } from 'reactstrap'
import FieldDecorations from './FieldDecorations'

/*
  field: { name, onBlur, onChange, ref, value },
  fieldState: { error, invalid, isDirty, isTouched },
  formState: {defaultValues, errors, isDirty, isSubmitSuccessful, isSubmitted, isSubmitting, isValid, isValidating, submitCount, touchedFields}
*/

const useShouldValidate = () => true

const TextField = ({ name, label, validators, parse, format, lockedWhenPreset = false, hideLabel = false, parseWhenFocused, placeholder, tooltip, readOnly = false }) => {
  const { control } = useFormContext()

  /*
    const field = useField({ name, validators, parse, format, parseWhenFocused, custom: { label } })
    const { value, onChange, onBlur, error, visited, submitted, valid, onFocus } = field
    const { t } = useTranslate()
    */

  const shouldValidate = useShouldValidate()

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=''
      rules={{
        validate: {
          required: v => !!v || 'Required',
          dan: v => v !== 'Dan' || 'No Dan'
        }
      }}
      render={({ field, fieldState, formState }) => {
        return (
          <FieldDecorations label={label} hideLabel={hideLabel} fieldState={fieldState}>
            <Input
              name={name}
              invalid={fieldState.invalid && (fieldState.isTouched || formState.isSubmitted) && shouldValidate}
              onChange={field.onChange}
              value={field.value}
              onBlur={field.onBlur}
              placeholder={placeholder}
              readOnly={readOnly}
            />
          </FieldDecorations>
        )
      }}
    />
  )
}

export default TextField
