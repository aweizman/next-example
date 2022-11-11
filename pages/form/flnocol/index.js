import { Col, Row } from 'reactstrap'
import TextField from '../../../components/Fields/TextFields'
import FormWrapper from '../../../components/FormWrapper'

const initialValues = {}
const transform = {}

const FlNocol = () =>
  <FormWrapper initialValues={initialValues} transform={transform}>
    <Row>
      <Col><TextField name='firstName' label='First Name' /></Col>
      <Col><TextField name='middleName' label='Middle Name' /></Col>
      <Col><TextField name='lastName' label='Last Name' /></Col>
    </Row>
    <Row>
      <Col sm='5'><TextField name='address' label='Street Address' /></Col>
      <Col sm='7'>
        <Row>
          <Col sm='6'><TextField name='city' label='City' /></Col>
          <Col sm='2'><TextField name='state' label='State' /></Col>
          <Col sm='4'><TextField name='zip' label='Zip' /></Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col><TextField name='firstName' label='First Name' /></Col>
      <Col><TextField name='middleName' label='Middle Name' /></Col>
      <Col><TextField name='lastName' label='Last Name' /></Col>
    </Row>
  </FormWrapper>

export default FlNocol
