import React from 'react'
import './NavLink.css'
const NavLink = ({menuTitle,active}) => {
  return (
    <a style={{textDecorationLine:active&&'underline'}} className='link' href="">{menuTitle}</a>

  )
}

export default NavLink