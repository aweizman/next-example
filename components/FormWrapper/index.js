import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button, Col, Container, Form, Row } from 'reactstrap'

/*
  formState: { defaultValues, errors, isDirty, isSubmitSuccessful, isSubmitted, isSubmitting, isValid, isValidating, submitCount, touchedFields }
*/

const Title = () => <h1>Example Form</h1>

const SubmitButton = () =>
  <Row>
    <Col>
      <Button name='submit' data-testid='submit' className='mt-1 w-100'>Submit</Button>
    </Col>
  </Row>

const FormWrapper = ({ children }) => {
  const methods = useForm({
    defaultValues: {

    }
  })

  const [result, setResult] = useState('');

  const onSubmit = async data => {
    console.log(data)
    // may want to find a better way to send a request, use-async-ops?
    const JSONData = JSON.stringify(data)
    const endpoint = '/api/hello'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONData,
    }

    const response = await fetch(endpoint, options)
    setResult(await response.json())
    console.log(result)

  }

  return (
    <>
      <a href='/hello' data-testid='redirectLink' >Link to /hello, but actually a redirect to hello-nextjs</a>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <Container>
            <Title />
            {children}
            <SubmitButton />
          </Container>
        </Form>
      </FormProvider>
      <div>{result}</div>
    </>
  )
}

export default FormWrapper
