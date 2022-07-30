import React from 'react'
import axios from 'axios'
import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function TransactionDetails() {
  let { index } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data)
        console.log(response.data)
      })
      .catch((error) => navigate("/"));
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then((response) => navigate(`/transactions`))
      .catch((error) => console.error(error));
  };
  return(
    <>
    <p>{transaction.date}</p>
    <p>{transaction.item_name}</p>
    <p>{transaction.amount}</p> 
    <p>{transaction.from}</p> 
    <p>{transaction.category}</p> 
    <button><Link to={`/transactions/${index}/edit`}>Edit</Link></button>
    <button onClick={handleDelete}>Delete</button>
    </>
  )
  }

export default TransactionDetails;