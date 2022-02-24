import React from 'react'
import classes from './Header.module.css'
import img from '../../assets/meals.jpeg'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header} >
        <h1>AsafSteak</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={img} alt='meals_on_table'/>
      </div>
    </React.Fragment>
  )
}

export default Header;