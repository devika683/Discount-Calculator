
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';



function App() {
const [amount,setAmount] = useState(0)
const [discount,setDiscount] = useState(0)

const [netamount,setNetamount] = useState(0)
const [savings,setSavings] = useState(0)

const [showResult, setShowResult] = useState(false);

const Calculate=(e)=>{
  const discountedAmount = amount-(amount*discount)/100
 setNetamount(discountedAmount);
  setSavings(amount-discountedAmount);
  setShowResult(true);
}

const clear=(e)=>{
  setAmount(0)
  setDiscount(0)
  setSavings(0)
  setNetamount(0)
  setShowResult(false);
}

  return (
    <div className={`App ${showResult ? 'fade-in' : ''}`}>
 
     <div className="container">
      <div className="header">

        <h1>Discount Calculator</h1>
        <h2>Calculating...</h2>
      </div>
      <div className="total">
<div className="price">
      <h3>Actual Price</h3>
        <h2>&#8377;: {amount}</h2>
        </div>
<div className="savings">
        <h3> Your Savings</h3>
        <h2>&#8377;: {savings}</h2>
        </div>

      </div>
      <div className="form">
        <form>
          <div className="input">
          <div className="amountfield">
          <TextField id="outlined-basic" label="Enter Amount" value={amount ||""}
          onChange={(e)=>setAmount(e.target.value)}
          variant="outlined" />
          </div>
          <div className="discountfield">
          <TextField id="outlined-basic" label="Enter Discount %" value={discount ||""}
          onChange={(e)=>setDiscount(e.target.value)}
          variant="outlined" />
          </div>

          </div>
        </form>
      </div>
      
<div className="button">
<Button variant="contained" color="success" onClick={e=>Calculate(e)}>
  Calculate
</Button>
<Button variant="outlined" color="error" onClick={e=>clear(e)}>
  Clear
</Button>
</div>

      <div className="amount">
        <h3>Net Amount:</h3>
        
      <h2>&#8377; {netamount}</h2>
        
      </div>
     </div>
    </div>
  );
}

export default App;
