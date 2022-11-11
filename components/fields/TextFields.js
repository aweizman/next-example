import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap'

const TextField = React.forwardRef(({ className, onChange, onBlur, name, label }, ref) => {
  return (
    <FormGroup className={className}>
      <Label>{label}</Label>
      <Input
        type='text'
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        innerRef={ref}
      />
    </FormGroup>
  )
})

export default TextField
