import { Button } from "reactstrap"


const onSubmit = async () => {
  const endpoint = '/api/post/12345'
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }

  const response = await fetch(endpoint, options)
  const result = await response.json()
  console.log(result)
}

const randomPage = () =>
  <div>
    <p>This is a random page</p>
    <Button onClick={onSubmit} >Test the param route</Button>
  </div>

export default randomPage