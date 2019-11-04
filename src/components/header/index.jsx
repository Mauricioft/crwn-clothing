import React from 'react'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/'
import './styles.scss'

export const  Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'/>
    </Link>
    <div className='options'>
      <Link className='option' to='/top'>
        SHOP
      </Link>
      <Link className='option' to='/top'>
        CONTACT
      </Link>
      {
        currentUser ? (
          <span className='option' onClick={() => auth.signOun()}>
            SIGNUP
          </span>
        ):(
          <Link className='option' to='/signin'>
            SIGNIN
          </Link>
        )
      }
    </div>
  </div>
)