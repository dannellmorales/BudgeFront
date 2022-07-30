import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const API = process.env.REACT_APP_API_URL;

function Transactions() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => {
        setTransactions(response.data)

      })
      .catch((err) => console.error(err));
  }, []);

  const totals = transactions.map((transaction) => {
    return Number(transaction.amount)
  })
  let bankAccount = 0

  totals.forEach(total => {
    bankAccount += total
    return bankAccount
  })


  return (
    <div >
      <h2>Total of Payments ${bankAccount}</h2>
      {console.log(bankAccount)}
      {transactions.map((transaction, index) => {
        return (

          <section className="trans">
            <p>{transaction.date}</p>
            <p><Link to={`/transactions/${index}`}>{transaction.item_name}</Link></p>
            <p>${transaction.amount}</p>

          </section>
        )
      })}
    </div>
  )
}

export default Transactions;
