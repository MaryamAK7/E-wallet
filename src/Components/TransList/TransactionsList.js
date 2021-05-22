import React, { useContext } from "react";
import wage from "./wage.png";
import "./TransactionsList.css";
import { ListWalletContext } from "../../Context/ListWalletContext";

export default function TransactionsList({transaction, handleRemove}) {
  const {chosenWallet } = useContext(ListWalletContext);
  let allTags = [];
  
  return (
    <div>
      {(allTags = transaction.tagTrans.split(","))}
      <div
        className="trans-list note-trans-item-flex animate__animated animate__slideInDown animate__faster trans-list-div-parent"
        id={transaction.id}
      >
        <div className="trans-item">
          <div className="icon-ctr">
            <div>
              <img src={wage} alt="wage" className="wage-icon" />
            </div>
            <div>
              <h3 className="trans-amount">{transaction.noteTrans}</h3>
              <div className="tags-list">
                {allTags.map(
                  (tag) =>
                    allTags.length !== 0 && (
                      <div className="tags-item">{tag}</div>
                    )
                )}
              </div>
            </div>
          </div>
          <div className="trs-date">{transaction.date}</div>
          <h3 className="trans-amount">
            {chosenWallet.select}
            {transaction.amount}
          </h3>
          <div
            className="trash-icon"
            onClick={() => handleRemove(transaction.id)}
          >
            <i class="times icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
