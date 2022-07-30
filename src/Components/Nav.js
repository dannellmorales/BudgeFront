import React from 'react'
import { Link } from "react-router-dom"
function Nav() {
  return (

    <div className="nav">
      <Link to="/" className="bugTitle">Budget App</Link>
      <Link to="/transactions"><button>Transactions</button></Link>
      <Link to="/transactions/new"><button>New Transactions</button></Link>
    </div>
  )
}

export default Nav