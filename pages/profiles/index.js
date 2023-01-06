import Link from "next/link"



const Profiles = () =>
  <div>
    <h2>List of profiles:</h2>
    <ul style={{ listStyleType: 'none' }}>
      <li>
        <Link href='/profile/123'>Go to profile 123</Link>
      </li>
      <li>
        <Link href='/profile/456'>Go to profile 456</Link>
      </li>
    </ul>
  </div>

export default Profiles
