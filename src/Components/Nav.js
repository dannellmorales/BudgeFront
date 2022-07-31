import React from 'react'
import { Link } from "react-router-dom"
function Nav() {
  return (

    <div className="Nav">
      <Link to="/" className="bugTitle"><h1>Budget App</h1></Link>
      <Link to="/transactions"><button>Transactions</button></Link>
      <Link to="/transactions/new"><button>New Transactions</button></Link>
     
      
    </div>
  )
}

export default Nav