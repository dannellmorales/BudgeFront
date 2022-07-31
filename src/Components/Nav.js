import React from 'react'
import { Link } from "react-router-dom"
function Nav() {
  return (

    <div className="Nav">
      <Link to="/" className="bugTitle">Budget App</Link>
      <Link to="/transactions" className="but"><button>Transactions</button></Link>
      <Link to="/transactions/new" className="but"><button>New Transactions</button></Link>
     
      
    </div>
  )
}

export default Nav