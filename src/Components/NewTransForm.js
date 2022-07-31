import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NewTransForm() {
  const [newTrans, setNewTrans] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: ""
  });
  const navigate = useNavigate();

  const addTransaction = () => {
    axios.post(`${API}/transactions`, newTrans)
      .then(response => navigate("/transactions"))
      .catch(error => console.error(error))
  };
  const handleNumberChange = (event) => {
    setNewTrans({ ...newTrans, [event.target.id]: event.target.value });
  };

  const handleTextChange = (event) => {
    setNewTrans({ ...newTrans, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction();
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name:</label>
        <br/>
        <input
          id="item_name"
          value={newTrans.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter Name"
          required
        />
      <br/>
        <label htmlFor="amount">Amount:</label>
      <br/>
        <input
          id="amount"
          value={newTrans.amount}
          type="text"
          onChange={handleNumberChange}
          placeholder="Enter Amount"
          required
        />
      <br/>
        <label htmlFor="date">Date:</label>
      <br/>
        <input
          id="date"
          value={newTrans.date}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter Date"
          required
        />
        <br/>
        <label htmlFor="from">from:</label>
        <br/>
        <input
          id="from"
          value={newTrans.from}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter From"
          required
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default NewTransForm