import { Col, Row } from 'reactstrap'
import SelectField from '../components/Fields/SelectField'
import TextField from '../components/Fields/TextFields'
import FormWrapper from '../components/FormWrapper'

const initialValues = {}
const transform = {}

const stateCodeOptions = [
  { value: 'FL', label: 'FL' },
  { value: 'GA', label: 'GA' },
  { value: 'TX', label: 'TX' }
]

const Example = () =>
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
          <Col sm='2'><SelectField name='state' label='State' options={stateCodeOptions} /></Col>
          <Col sm='4'><TextField name='zip' label='Zip' /></Col>
        </Row>
      </Col>
    </Row>
  </FormWrapper>

export default Example
