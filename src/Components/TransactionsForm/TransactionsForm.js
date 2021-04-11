import React, { useState, useContext,useEffect } from "react";
import { ListTransContext } from "../../Context/ListTransContext";
import { ListWalletContext } from "../../Context/ListWalletContext";
import { useParams } from "react-router-dom";
import "./TransactionsForm.css" 
import TransactionsList from "../../Components/TransactionsList/TransactionsList";

function TransactionsForm() {
  const { name } = useParams();
  const { chosenWallet } = useContext(ListWalletContext);
  const { addTrans } = useContext(ListTransContext);
  const [amount, setAmount] = useState(0);
  const [noteTrans, setNoteTrans] = useState("");
  const [tagTrans, setTagTrans] = useState("");
  const [type, setType] = useState();
  const [bl, setBl]= useState(chosenWallet.balance);

  let am = 0;
  let id=0; 
 useEffect(()=>{
  setBl(chosenWallet.balance);
 },[chosenWallet.balance])
  const handleAmountInput = (e) => {
    setAmount(e.target.value);
  };
 
  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleNoteTrans = (e) => {
    setNoteTrans(e.target.value);
    console.log(e.target.value)
  };
  const handleTagTrans = (e) => {
    setTagTrans(e.target.value);
  };

  const addTransaction = (e) => {
 
    e.preventDefault();
    am = type === 'expense' ?parseInt(amount)*(-1) : parseInt(amount);
    id = chosenWallet.transactions.length;
    let d = new Date() ;
    chosenWallet.transactions.push( { id: id, walletName : name, amount : am, type, noteTrans, tagTrans, date: d.toDateString() })
    chosenWallet.totalBal += am;
    chosenWallet.balance+=am;
    setBl(chosenWallet.balance)
    addTrans(id, name , am ,type, noteTrans, tagTrans,d.toDateString() )
    setAmount(0);
    setNoteTrans("");
    setTagTrans("");
  };
  let headStyle ={
    color: '#3b3983',
    margin :'auto', 
    width: '50%', 
    marginTop:'20px',
    display: 'flex',
    justifyContent : 'space-between'
  }
  return (
    <>
    <div style={headStyle}  className='single-wallet-name'>
      {console.log('bl', bl)}
        <h1> {chosenWallet.walletName} </h1> 
       <h4 style={{paddingTop:'10px'}}> Current Balance: {bl}{chosenWallet.select} </h4>
      </div>
      <div className="trans-form shadow-lg p-3 mb-5 rounded">
        <h3>Make Transaction : &nbsp; </h3>
        <br />
        <div className="grid-trans-form">
        <form onSubmit={addTransaction}>
          <div className="inline-input">      
            <input
              type="number"
              className="trans-form-inputs trans-form-input-amount"
              placeholder="Add Amount"
              value={amount}
              onChange={handleAmountInput}
              required
            />
            <div onChange={handleType} className='type-ctn'>
            <div className="btn-color exp-in "> <input type="radio" value="income" name="type" /> Income </div>
            <div className="btn-color exp-in">  <input type="radio" value="expense" name="type" /> Expense </div>
            </div>

          </div>
          <div className="inline-input">
            <select name="note"  className="trans-form-inputs trans-form-input-amount"  onChange={handleNoteTrans} >
              <option value=""></option>
              <option value="Salary">Salary</option>
              <option value="Food">Food</option>
              <option value="Fees">Fees</option>
              <option value="Transportation">Transportation</option>
              <option value="Gift">Gift</option>
            </select>
            
            <input
              type="text"
              className="trans-form-inputs trans-form-input-amount"
              placeholder="Add Tags ( coma in between )"
              value={tagTrans}
              onChange={handleTagTrans}
            />
          </div>
              <button className="btn-create-trans" type="submit">
              Create Transaction <i class="plus icon" ></i>
              </button>
          </form>
        </div>
      </div>
      <TransactionsList bl ={bl} setBl={setBl}/> 
    </>
  );
}
export default TransactionsForm;
