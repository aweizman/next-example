import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import TextField from '../components/fields/TextFields'
import { useForm } from 'react-hook-form'

const SubmitButton = () => {
  return (
    <Button name='submit' className='w-100'>Submit</Button>
  )
}

const Example = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = data => console.log(data)

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <h1>Example Form</h1>
        <Row>
          <Col><TextField {...register('firstName')} label='First Name' /></Col>
          <Col><TextField {...register('middleName')} label='Middle Name' /></Col>
          <Col><TextField {...register('lastName')} label='Last Name' /></Col>
        </Row>
        <Row>
          <Col sm='5'><TextField {...register('address')} label='Street Address' /></Col>
          <Col sm='7'>
            <Row>
              <Col sm='6'><TextField {...register('city')} label='City' /></Col>
              <Col sm='2'><TextField {...register('state')} label='State' /></Col>
              <Col sm='4'><TextField {...register('zip')} label='Zip' /></Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <SubmitButton />
          </Col>
        </Row>
      </Container>
    </Form>
  )
}

export default Example
