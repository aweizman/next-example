import Link from 'next/link'
import { useRouter } from 'next/router'

const Profile = () => {
  const router = useRouter()
  const { uuid } = router.query
  return (
    <div>
      <Link href='/profiles'>Back</Link>
      <p>This profile has a uuid of {uuid}</p>
    </div>
  )
}

export default Profile
