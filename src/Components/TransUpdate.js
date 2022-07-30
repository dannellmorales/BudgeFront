import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams} from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function TransUpdate() {
  const navigate = useNavigate();
  const {index} = useParams();

  const [editTrans, setEditTrans] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: ""
  });

  const handleNumberChange = (event) => {
    setEditTrans({ ...editTrans, [event.target.id]: event.target.value });
  };

  const handleTextChange = (event) => {
    setEditTrans({ ...editTrans, [event.target.id]: event.target.value });
  };
  useEffect(()=>{
    axios.get(`${API}/transactions/${index}`)
   .then((res)=> setEditTrans(res.data))
  }, [])

  const editTransaction = () => {
    axios.put(`${API}/transactions/${index}`, editTrans)
      .then(response => navigate("/transactions"))
      .catch(error => console.error(error))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editTransaction();
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name:</label>
        <input
          id="item_name"
          value={editTrans.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter Name"
          required
        />

        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          value={editTrans.amount}
          type="text"
          onChange={handleNumberChange}
          placeholder="Enter Amount"
          required
        />

        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={editTrans.date}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter Date"
          required
        />
        <label htmlFor="from">from:</label>
        <input
          id="from"
          value={editTrans.from}
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

export default TransUpdate;