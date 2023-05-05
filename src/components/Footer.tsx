import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      Challenge by{' '}
      <Link
        to='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
      >
        Frontend Mentor
      </Link>
      . Coded by <Link to='mateusz-gorecki.dev'>Me</Link>.
    </div>
  )
}

export default Footer
