import ThemeBtn from '../ThemeButton/ThemeBtn'

import classes from './Header.module.scss'

const Header = () => {
  return (
    <header className={classes.wrapper}>
      <h1>TODO</h1>
      <ThemeBtn />
    </header>
  )
}

export default Header
