import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Transactions from './Components/Transactions';
import NewTransForm from './Components/NewTransForm';
import TransUpdate from './Components/TransUpdate';
import TransactionDetails from './Components/TransactionDetails';
import 'bootstrap/dist/css/bootstrap.min.css';


import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="grid">
      <Router>
      <Nav />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/transactions/new" element={<NewTransForm />} />
        <Route path="/transactions/:index/edit" element={<TransUpdate />} />
        <Route path="/transactions/:index" element={<TransactionDetails />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
