import React from 'react'
import Header from './Header'

const App = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <aside className="aside aside-1">&nbsp;</aside>
      <aside className="aside aside-2">&nbsp;</aside>
      <div className="main">
        <div>{children}</div>
      </div>
    </div>
  )
}

export default App
