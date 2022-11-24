import { Col, Row } from 'reactstrap'
import MoneyField from '../components/Fields/MoneyField'
import SelectField from '../components/Fields/SelectField'
import TextField from '../components/Fields/TextField'
import FormWrapper from '../components/FormWrapper'
import { required } from '../utils/inputValidators'
import { normalizeMoney, normalizePhone, normalizeUpperCase, normalizeZip } from '../utils/normalizations'

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
      <Col><TextField name='firstName' label='First Name' parse={normalizeUpperCase} validators={{ required }} /></Col>
      <Col><TextField name='middleName' label='Middle Name' parse={normalizeUpperCase} validators={{ required }} /></Col>
      <Col><TextField name='lastName' label='Last Name' parse={normalizeUpperCase} validators={{ required }} /></Col>
    </Row>
    <Row>
      <Col sm='5'><TextField name='address' label='Street Address' parse={normalizeUpperCase} validators={{ required }} /></Col>
      <Col sm='7'>
        <Row>
          <Col sm='6'><TextField name='city' label='City' parse={normalizeUpperCase} validators={{ required }} /></Col>
          <Col sm='2'><SelectField name='state' label='State' options={stateCodeOptions} validators={{ required }} /></Col>
          <Col sm='4'><TextField name='zip' label='Zip' parse={normalizeZip} validators={{ required }} /></Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col><TextField name='phone' label='Phone' parse={normalizePhone} validators={{ required }} /></Col>
      <Col><TextField name='email' label='Email' validators={{ required }} /></Col>
      <Col><MoneyField name='cost' label='Cost' validators={{ required }} /></Col>
    </Row>
  </FormWrapper>

export default Example
