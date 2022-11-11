import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button, Col, Container, Form, Row } from 'reactstrap'

const Title = () => <h1>Example Form</h1>

const SubmitButton = () =>
  <Row>
    <Col>
      <Button name='submit' className='w-100'>Submit</Button>
    </Col>
  </Row>

const FormWrapper = ({ children }) => {
  const methods = useForm({
    defaultValues: {

    }
  })

  const onSubmit = data => {
    methods.reset()
  }

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Container>
          <Title />
          {children}
          <SubmitButton />
        </Container>
      </Form>
    </FormProvider>
  )
}

export default FormWrapper
