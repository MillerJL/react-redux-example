import React from 'react'
import { Link, IndexLink } from 'react-router'

const Header = (props) => {
  return (
    <header className="header">
      <IndexLink to="/" activeStyle={{ color: 'red' }}> Home </IndexLink>
      <Link to="/foo" activeStyle={{ color: 'red' }}> Foo </Link>
      <Link to="/bar" activeStyle={{ color: 'red' }}> Bar </Link>
    </header>
  )
}

export default Header
