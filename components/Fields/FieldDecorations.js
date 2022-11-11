import React from 'react'
import { FormGroup, InputGroup, Label } from 'reactstrap'

const InputLabel = ({ label, hideLabel }) => !hideLabel && label ? <Label>{label}</Label> : null

const FieldDecorations = ({ children, className, label, visited, submitted, hideLabel = false, tooltip, fieldState }) => {
  const { name, error } = fieldState

  return (
    <FormGroup className={className}>
      <InputLabel label={label} hideLabel={hideLabel} />
      <InputGroup>
        {children}
      </InputGroup>
      {error?.message && (<p className='errMsg text-danger'>{error?.message}</p>)}
    </FormGroup>
  )
}

export default FieldDecorations
