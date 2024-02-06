
import { Link } from 'react-router-dom'

export default function ButtonLink({children, to}) {

  return (
    <Link to={to} className='text-sm text-blue-400 underline hover:text-blue-500'>{children}</Link>
  )
}
