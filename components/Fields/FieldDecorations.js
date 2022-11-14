import React from 'react'
import { FormGroup, InputGroup, Label } from 'reactstrap'

const FieldDecorations = ({ children, label, error }) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <InputGroup>
        {children}
      </InputGroup>
      {error?.message && (<p className='errMsg text-danger'>{error?.message}</p>)}
    </FormGroup>
  )
}

export default FieldDecorations
