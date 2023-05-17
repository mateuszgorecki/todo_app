import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
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
      </p>
      <p>
        Link to repo on{' '}
        <a
          href='https://github.com/mateuszgorecki/todo_app'
          target='_blank'
          rel='noreferrer'
        >
          Github
        </a>
      </p>
    </footer>
  )
}

export default Footer
