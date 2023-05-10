
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Challenge by{' '}
      <a
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
        rel='noreferrer'
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        href='https://mateusz-gorecki.dev'
        target='_blank'
        rel='noreferrer'
      >
        Me
      </a>
      .
    </footer>
  )
}

export default Footer
