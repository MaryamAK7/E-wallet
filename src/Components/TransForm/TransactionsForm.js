import React, { useState, useContext, useEffect } from "react";
import { ListWalletContext } from "../../Context/ListWalletContext";
import { useParams } from "react-router-dom";
import "./TransactionsForm.css";
import TransactionsList from "../../Components/TransList/TransactionsList";

function TransactionsForm() {
  const { name } = useParams();
  const { chosenWallet, removeTrans, WalletList } =
    useContext(ListWalletContext);
  const [amount, setAmount] = useState(0);
  const [noteTrans, setNoteTrans] = useState("");
  const [tagTrans, setTagTrans] = useState("");
  const [type, setType] = useState();
  const [trans, setTrans] = useState(chosenWallet.transactions);
  let am = 0;
  let id = 0;

  const handleAmountInput = (e) => {
    setAmount(e.target.value);
  };
  useEffect(() => {
    WalletList.forEach((wal) =>
      wal.walletName === name ? setTrans(wal.transactions) : null
    );
  }, [WalletList, name]);

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleNoteTrans = (e) => {
    setNoteTrans(e.target.value);
  };
  const handleTagTrans = (e) => {
    setTagTrans(e.target.value);
  };
  const handleRemove = (id) => {
    removeTrans(id);
    WalletList.forEach((wal) =>
      wal.walletName === name ? setTrans(wal.transactions) : null
    );
    let res = 0;
    for (let i = 0; i < chosenWallet.transactions.length; i++) {
      if (chosenWallet.transactions[i].amount) {
        res += chosenWallet.transactions[i].amount;
      }
    }
    chosenWallet.totalBal = chosenWallet.balance + res;
  };
  const addTransaction = (e) => {
    e.preventDefault();
    am = type === "expense" ? parseInt(amount) * -1 : parseInt(amount);
    id = chosenWallet.transactions.length;
    let d = new Date();
    chosenWallet.transactions.push({
      id: id,
      walletName: name,
      amount: am,
      type,
      noteTrans,
      tagTrans,
      date: d.toDateString(),
    });
    let res = 0;
    for (let i = 0; i < chosenWallet.transactions.length; i++) {
      if (chosenWallet.transactions[i].amount) {
        res += chosenWallet.transactions[i].amount;
      }
    }
    chosenWallet.totalBal = chosenWallet.balance + res;
    setTrans(chosenWallet.transactions);
    setAmount(0);
    setNoteTrans("");
    setTagTrans("");
  };

  let headStyle = {
    color: "#3b3983",
    margin: "auto",
    width: "50%",
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <>
      <div style={headStyle} className="single-wallet-name">
        <h1> {chosenWallet.walletName} </h1>
        <h4 style={{ paddingTop: "10px" }}>
          {" "}
          Current Balance: {chosenWallet.totalBal}
          {chosenWallet.select}{" "}
        </h4>
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
              <div onChange={handleType} className="type-ctn">
                <div className="btn-color exp-in ">
                  {" "}
                  <input type="radio" value="income" name="type" checked="checked" /> Income{" "}
                </div>
                <div className="btn-color exp-in">
                  {" "}
                  <input
                    type="radio"
                    value="expense"
                    name="type"
                  /> Expense{" "}
                </div>
              </div>
            </div>
            <div className="inline-input">
              <select
                name="note"
                className="trans-form-inputs trans-form-input-amount"
                onChange={handleNoteTrans}
              >
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
              Create Transaction <i class="plus icon"></i>
            </button>
          </form>
        </div>
      </div>
      {trans &&
        trans.map((transaction, i) => (
          <TransactionsList
            transaction={transaction}
            handleRemove={handleRemove}
          />
        ))}
    </>
  );
}
export default TransactionsForm;
